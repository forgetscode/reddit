import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { Arg, Query, Mutation,  Resolver, InputType, Field, Ctx, UseMiddleware, FieldResolver, Root, ObjectType, Int} from "type-graphql";
import { Post } from "../entities/Post";
import { getConnection } from "typeorm";
import { Upvote } from "../entities/Upvote";
import { User } from "../entities/User";

@InputType()
class PostInput {
    @Field()
    title: string
    @Field()
    text: string
}

@ObjectType()
class PaginatedPosts {
    @Field(() => [Post])
    posts: Post[];
    @Field()
    hasMore:boolean;
}

@Resolver(Post)
export class PostResolver {
    @FieldResolver( () => User )
    creator ( @Root() post: Post,
    @Ctx() {userLoader}: MyContext
     ) {
        return userLoader.load(post.creatorId);
    }

    @FieldResolver( () => Int, { nullable: true })
    async voteStatus (    
        @Root() post: Post,
        @Ctx() { upvoteLoader, req }: MyContext
    ){
        if ( !req.session.userId ) {
            return null;
        }

         const upvote = await upvoteLoader.load({ 
            postId: post.id, 
            userId: req.session.userId 
        });

        return upvote? upvote.value : null;
    }

    @Mutation( () => Boolean )
    @UseMiddleware([isAuth])
    async vote(
        @Arg('postId', () => Int) postId: number, 
        @Arg('value', () => Int) value: number, 
        @Ctx() { req }: MyContext
    ) 
    {
        const isUpvote = value !== -1;
        const realValue = isUpvote? 1:-1;
        const userId = req.session.userId;

        const upvote = await Upvote.findOne({where: { postId, userId }});

        if ( upvote && upvote.value !== realValue) {
            await getConnection().transaction( async (tm) => {
                await tm.query(
                    `
                    update upvote
                    set value = $1
                    where "postId" = $2 and "userId" = $3
                    `, [realValue, postId, userId]);
                await tm.query(
                    `
                    update post
                    set points = points + $1
                    where id = $2
                    `, [ 2*realValue, postId ]);
            });
        } else if (!upvote){
            await getConnection().transaction( async tm => {
                await tm.query(
                    `
                    insert into upvote ("userId", "postId", value)
                    values ($1, $2, $3)
                    `, [userId, postId, realValue])
                await tm.query(
                    `
                    update post
                    set points = points + $1
                    where id = $2
                    `, [ realValue, postId ])
            });
        } else {
            await getConnection().transaction( async (tm) => {
                await tm.query(
                    `
                    delete from upvote
                    where "postId" = $1 and "userId" = $2
                    `, [postId, userId]);
                await tm.query(
                    `
                    update post
                    set points = points - $1
                    where id = $2
                    `, [ realValue, postId ]);
            });
        }
        return true;
    }
    
    @Query(() => PaginatedPosts)
    async posts(
        @Arg('limit') limit: number,
        @Arg('cursor', () => String, {nullable: true}) cursor: string | null,
    ): Promise<PaginatedPosts> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

        /*
        if (req.session.userId){
            replacements.push(req.session.userId);
        }
        */

        //let cursorIdx = 3;
        if (cursor){
            replacements.push(new Date(parseInt(cursor)));
            //cursorIdx = replacements.length;
        }
      

        const posts = await getConnection().query(
            `
            select p.*
            from post p
            ${cursor ? `where p."createdAt" < $2` : ""}
            order by p."createdAt" DESC
            limit $1
            `,
            replacements
            );
        
        /*
                    `
            select p.*,
            json_build_object(
            'id', u.id,
            'username', u.username,
            'email', u.email,
            'createdAt', u."createdAt",
            'updatedAt', u."updatedAt"
            ) creator,
            ${
                req.session.userId
                ? '(select value from upvote where "userId" = $2 and "postId" = p.id) "voteStatus"'
                : 'null as "voteStatus"'
            }
            from post p
            inner join public.user u on u.id =p."creatorId"
            ${cursor ? `where p."createdAt" < $${cursorIdx}` : ""}
            order by p."createdAt" DESC
            limit $1
            `,
            replacements
            );

            const qb  =getConnection()
            .getRepository(Post)
            .createQueryBuilder('p')
            .innerJoinAndSelect(
                'p.creator',
                "u",
                'u.id = p."creatorId"',
            )
            .orderBy('p."createdAt"', 'DESC')
            .limit(realLimitPlusOne);

            if (cursor) {
                qb.where('p."createdAt" < :cursor', 
                { cursor: new Date(parseInt(cursor)),
                });
            }
            const posts = await qb.getMany()
            */

        return {
            posts:posts.slice(0,realLimit),
            hasMore: posts.length === realLimitPlusOne
        };
    }

    @Query(() => Post, {nullable: true})
    post(@Arg('id', () => Int) id: number, ):
        Promise<Post | undefined> {
            return Post.findOne(id);
        }

    @Mutation(() => Post)
    @UseMiddleware(isAuth)
    async createPost( 
        @Arg( 'input' ) input:PostInput, 
        @Ctx() { req }: MyContext
        ): Promise<Post> {
        return Post.create({
            ...input,
            creatorId: req.session.userId
        }).save();
    }

    @Mutation(() => Post, {nullable: true})
    @UseMiddleware(isAuth)
    async updatePost( 
        @Arg('id', () => Int) id: number, 
        @Arg('title') title: string,
        @Arg("text") text:string,
        @Ctx() { req }: MyContext
        ): Promise<Post | null>{
            const post = await getConnection()
                .createQueryBuilder()
                .update(Post)
                .set({title , text})
                .where('id =:id and "creatorId" = :creatorId ', {
                    id,
                    creatorId: req.session.userId,
                    })
                .returning("*")
                .execute();
            
            return post.raw[0];
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deletePost( 
        @Arg('id', () => Int) id: number,
        @Ctx() { req }: MyContext): Promise<boolean>{
            await Post.delete({ id, creatorId: req.session.userId });
            return true;
    }
}
import {  dedupExchange, fetchExchange, stringifyVariables } from "urql"
import { cacheExchange, Resolver } from '@urql/exchange-graphcache';
import { LogoutMutation,
         MeQuery, 
         MeDocument, 
         LoginMutation, 
         RegisterMutation,
         VoteMutationVariables,
         DeletePostMutationVariables} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { pipe, tap } from 'wonka';
import { Exchange, gql} from 'urql';
import { useRouter } from "next/router";
import { isServer } from "./isServer";


const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (error?.message.includes("not authenticated")) {
        const router = useRouter()
        router.push("/login");
      }
    })
  );
};

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie ='';
  if (isServer()){
    cookie = ctx.req.headers.cookie;
  }
  
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include"  as const ,
      headers: 
      cookie
      ?{
        "X-Forwarded-Proto": "https",
        cookie
        }
        :
        {
        "X-Forwarded-Proto": "https"
        },
    },
    exchanges:[
      dedupExchange,
      cacheExchange({
        keys: {
          PaginatedPosts: () => null, 
        },
        resolvers:{
          Query:{
            posts: cursorPagination(),
          },
        },
        updates: {
          Mutation: {
            deletePost: (_result, args, cache, info) => {
              console.log("deleted");
              cache.invalidate({
                __typename: "Post",
                id: (args as DeletePostMutationVariables).id,
              });
            },
            vote: (_result, args, cache, info) => {
              const {postId, value} = args as VoteMutationVariables;
              const data = cache.readFragment(
                gql`
                  fragment _ on Post {
                    id
                    points
                    voteStatus
                  }
                `,
                { id: postId}
              );

              if (data) {
                let newPoints = data.points;
                let newValue = value;
                console.log("points old :", data.points, "   ", "status:",value)
                if (data.voteStatus === value ) {
                  newPoints = newPoints - value;
                  newValue = null;
                }
                else if (data.voteStatus === null){
                  newPoints = newPoints +value;
                  newValue = value;
                }
                else {
                  newPoints = newPoints + 2*value;
                  newValue = value;
                }
                console.log("points:", newPoints, "   ", "status:",newValue)

                cache.writeFragment(
                  gql`
                    fragment _ on Post {
                      points
                      voteStatus
                    }
                  `,{ id: postId, points: newPoints, voteStatus: newValue}
                );
              }
            },
            createPost: (_result, args, cache, info) => {
              const allFields = cache.inspectFields('Query');
              const fieldInfos = allFields.filter((info) => info.fieldName === 'posts');
              fieldInfos.forEach((fi) => {
                cache.invalidate("Query", "posts", fi.arguments || {} );
              });
            },
            logout: (_result, args, cache, info) => {
              betterUpdateQuery<LogoutMutation, MeQuery> (
                cache,
                {query:MeDocument},
                _result,
                () => ({me:null})
              )
            },
            login: (_result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery> (
                cache,
                {query:MeDocument},
                _result,
                (result, query) => {
                    if (result.login.errors){
                      return query
                    } else {
                      return{
                        me: result.login.user,
                      };
                    }
                  }
              );
            },
            register: (_result, args, cache, info) => {
              betterUpdateQuery<RegisterMutation, MeQuery> (
                cache,
                {query:MeDocument},
                _result,
                (result, query) => {
                    if (result.register.errors){
                      return query
                    } else {
                      return{
                        me: result.register.user,
                      };
                    }
                  }
                );
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
      ],
  };
};


export type MergeMode = 'before' | 'after';

export interface PaginationParams {
  offsetArgument?: string;
  limitArgument?: string;
  mergeMode?: MergeMode;
}

export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter(info => info.fieldName === fieldName);
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }

    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(cache.resolve(entityKey, fieldKey) as string, 'posts');
    info.partial = !isItInTheCache;
    let hasMore = true;
    const results: string[] = [];
    fieldInfos.forEach(fi => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string[];
      const data = cache.resolve(key as any, "posts") as string[];
      const _hasMore = cache.resolve(key as any, "hasMore");
      if (!_hasMore){
        hasMore = _hasMore as boolean;
      }
      results.push(...data);
    })
    return {
      __typename:"PaginatedPosts",
      hasMore, 
      posts: results
    };

    /*
    const visited = new Set();
    let result: NullArray<string> = [];
    let prevOffset: number | null = null;

    for (let i = 0; i < size; i++) {
      const { fieldKey, arguments: args } = fieldInfos[i];
      if (args === null || !compareArgs(fieldArgs, args)) {
        continue;
      }

      const links = cache.resolve(entityKey, fieldKey) as string[];
      const currentOffset = args[offsetArgument];

      if (
        links === null ||
        links.length === 0 ||
        typeof currentOffset !== 'number'
      ) {
        continue;
      }

      const tempResult: NullArray<string> = [];

      for (let j = 0; j < links.length; j++) {
        const link = links[j];
        if (visited.has(link)) continue;
        tempResult.push(link);
        visited.add(link);
      }

      if (
        (!prevOffset || currentOffset > prevOffset) ===
        (mergeMode === 'after')
      ) {
        result = [...result, ...tempResult];
      } else {
        result = [...tempResult, ...result];
      }

      prevOffset = currentOffset;
    }

    const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);
    if (hasCurrentPage) {
      return result;
    } else if (!(info as any).store.schema) {
      return undefined;
    } else {
      info.partial = true;
      return result;
    }
    */
  };
};
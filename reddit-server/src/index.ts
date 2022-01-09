import 'reflect-metadata';
import {MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config'
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from './types';

const redis = require('redis');
import session from 'express-session';
import connectRedis from 'connect-redis'

const RedisStore = connectRedis(session);
const redisClient = redis.createClient();

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();

    const app = express();

    app.use(
        session({
          name: 'qid',
          store: new RedisStore({ 
              client: redisClient,
              disableTouch: true,
          }),

          cookie: {
            maxAge: 1000 * 60 * 24 * 60 * 365,
            httpOnly:true,
            sameSite: 'none',
            secure: true
          },
          saveUninitialized:false,
          secret: 'keyboard cat 420',
          resave: false,
        })
      );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                HelloResolver,
                PostResolver,
                UserResolver
            ],
            validate: false,
        }),
        context: ({req, res}): MyContext => ({ em: orm.em, req, res }),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        /*cors: {
          origin: 'https://studio.apollographql.com',
          credentials: true,
        },*/
        cors:false,
      });

    app.listen(4000, () => {
        console.log('server start port:4000')
    });
};


main().catch(err => {
    console.error(err);
});

console.log("hello world")
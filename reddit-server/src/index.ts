import 'reflect-metadata';
import {MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import microConfig from './mikro-orm.config'
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import cors from 'cors';

const Redis = require('ioredis');

import session from 'express-session';
import connectRedis from 'connect-redis'



const main = async () => {
    const orm = await MikroORM.init(microConfig)

    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    
    app.use(cors({
      origin: Array('http://localhost:3000',"https://studio.apollographql.com"),
      credentials: true,
    }));
    

    app.use(
        session({
          name: COOKIE_NAME,
          store: new RedisStore({ 
              client: redis,
              disableTouch: true,
          }),

          cookie: {
            maxAge: 1000 * 60 * 24 * 60 * 365,
            httpOnly: true,
            sameSite: 'lax',
            secure:__prod__,
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
        context: ({req, res}) => ({ em: orm.em, req, res, redis }),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: false,
      });

    app.listen(4000, () => {
        console.log('server start port:4000')
    });
};


main().catch(err => {
    console.error(err);
});

console.log("hello world")
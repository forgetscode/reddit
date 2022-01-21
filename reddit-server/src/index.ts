import 'reflect-metadata';
import { COOKIE_NAME, __prod__ } from "./constants";
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
import { createConnection } from 'typeorm';
import { Post } from './entities/Post';
import { User } from './entities/User';
import path from "path";


//rerun for me
//pls
const main = async () => {
    const conn = await createConnection({
      type: 'postgres',
      database:'reddit2',
      username:'forgetscode',
      password:' ',
      logging:true,
      synchronize:false,
      migrations:[path.join(__dirname, "./migrations/*")],
      entities:[Post, User],
    });
    await conn.runMigrations();

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
        context: ({req, res}) => ({ req, res, redis }),
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

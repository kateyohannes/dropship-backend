
import { createYoga, createSchema } from "graphql-yoga";
import {typeDefs} from "./types";
import {resolvers} from "./resolvers"

const schema = createSchema({
    typeDefs,
    resolvers
});

const yoga = createYoga({
    schema,
    landingPage: false,
    cors: false,
    graphqlEndpoint: '/graphql'
});

const server = {
    hostname: Bun.env.HOST || 'localhost',
    port : Bun.env.USER_API_PORT || 4001
}

Bun.serve({
    fetch: yoga.fetch,
    port: server.port,
    hostname: server.hostname,
    development: Bun.env.NODE_ENV !== 'production'? true : false,
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
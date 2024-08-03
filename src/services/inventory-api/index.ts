
import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers"
import { createContext } from "@config/context";

const schema = createSchema({
    typeDefs,
    resolvers
});

const yoga = createYoga({
    schema,
    context: createContext,
    landingPage: false,
    cors: false,
    graphqlEndpoint: '/graphql'
});

const server = {
    hostname: Bun.env.HOST || 'localhost',
    port: Bun.env.INVENTORY_API_PORT || 4002
}

Bun.serve({
    fetch: yoga.fetch,
    port: server.port,
    hostname: server.hostname,
    development: Bun.env.NODE_ENV !== 'production' ? true : false,
});

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
);
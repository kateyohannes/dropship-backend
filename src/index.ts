
import { createYoga, createSchema } from "graphql-yoga";

const schema = createSchema({
    typeDefs: `
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => "Hello, world!",
        }
    }
});

const yoga = createYoga({
    schema,
    landingPage: false,
    cors: false,
    graphqlEndpoint: '/graphql'
});

const server = {
    hostname: Bun.env.HOST || 'localhost',
    port : Bun.env.PORT || 4000
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

import { createYoga, createSchema } from "graphql-yoga";


const typeOne = `
    type Query {
        one: String
    }
`

const typeTwo = `
    type Query {
        two: String
    }
`

const typeDefs = [typeOne, typeTwo]
const resolverOne = {
    Query: {
        one: () => "Hello One!",
        two: () => "Hello Two!",
    }
}

const resolvers = [resolverOne]

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
    port : Bun.env.GATWAY_PORT || 4000
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
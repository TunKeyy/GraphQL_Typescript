// Imports
const { graphqlHTTP } = require("express-graphql")
import { Express } from 'express';
import { buildSchema } from 'graphql';
// App Imports
// import schema from '../schema';
const schema = buildSchema(`
type Query {
  hello: String
}
`)
const root = {
    hello: () => {
      return "Hello world!"
    },
  }
// Setup GraphQL
export default function setupGraphQL(server: Express): void {
    console.info('SETUP - GraphQL...')

    // API (GraphQL on route `/api`)
    server.use("/graphql", graphqlHTTP(() => ({
        schema,
        graphiql: true,
        pretty: true,
        rootValue: root,
    })))
}
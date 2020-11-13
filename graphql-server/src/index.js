import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';

/*
* This demo is built using graphql-yoga
* https://github.com/prisma-labs/graphql-yoga
*/

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: { Query },
  context: { db }
});

/*
* Access the GraphQL playground:
* http://localhost:4000
*/

server.start(() => {
  console.log('Server is running on http://localhost:4000');
});

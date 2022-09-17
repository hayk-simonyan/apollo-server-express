const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { schema: typeDefs } = require('./schema/user/user.graphql');
const { resolvers } = require('./schema/user/user.resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: 3001 }, () => console.log('Server running on port 3001'));
});

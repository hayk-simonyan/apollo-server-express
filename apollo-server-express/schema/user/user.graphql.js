const { gql } = require('apollo-server-express');

const schema = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User]!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!, married: Boolean!): User!
  }
`;

module.exports = { schema };

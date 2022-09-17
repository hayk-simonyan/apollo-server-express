const { users } = require('../../data');

const resolvers = {
  Query: {
    getAllUsers: () => {
      return users;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args;
      users.push(user);
      return user;
    },
  },
};

module.exports = { resolvers };

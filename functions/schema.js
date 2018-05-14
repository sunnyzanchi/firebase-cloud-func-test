const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    fields: {
      testing: {
        resolve: () => 'hell yea',
        type: GraphQLString
      }
    },
    name: 'Query'
  })
});

module.exports = schema;

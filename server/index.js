const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const resolvers = require('./resolvers');
const PORT = 4000;
const { GraphQLServer } = require('graphql-yoga')


const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers,
  })

  server.start(()=> console.log('good times on port 4000'))
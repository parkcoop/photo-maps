const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')

const PORT = 4000;
const { GraphQLServer } = require('graphql-yoga')


const resolvers = {
  Query,
  Mutation,
  // User,
}


const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers,
    context: req => ({ ...req })
  })

  server.start(()=> console.log('Listening on http://localhost:4000'))
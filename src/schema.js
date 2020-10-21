import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

export const typeDefs = `

  type Query {
    hello: String 
    sum: Int
    greet(name: String!): String
  }

`

export default makeExecutableSchema({ typeDefs, resolvers })

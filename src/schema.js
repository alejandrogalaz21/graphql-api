import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

export const typeDefs = `

  type Query {
    hello: String 
    greet: Int
  }

`

export default makeExecutableSchema({ typeDefs, resolvers })

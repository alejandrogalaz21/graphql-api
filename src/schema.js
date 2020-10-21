import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

export const typeDefs = `

  type Query {
    hello: String 
    sum: Int
    greet(name: String!): String
    cars: [Car]
  }

  type Car {
    color: String
    type: String
    capacity: Int
  }

  type Mutation {
    createCar(input: CarInput): Car
  }

  input CarInput {
    color: String
    type: String
    capacity: Int
  }

`

export default makeExecutableSchema({ typeDefs, resolvers })

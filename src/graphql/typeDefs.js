export const typeDefs = `

  type User {
    _id: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }

`

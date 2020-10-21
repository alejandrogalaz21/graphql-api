import data from './../data'

export const resolvers = {
  Query: {
    hello: () => 'hello world',
    sum: () => 3 * 2,
    greet: (root, args) => `hello ${args.name}`,
    cars: () => data
  },
  Mutation: {
    createCar: (root, args) => {
      data.push(args.input)
    }
  }
}

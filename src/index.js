import express from 'express'
import { connection } from './db/connnection'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

connection()
const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema
  })
)
app.listen(5000, () => console.log('server runing !'))

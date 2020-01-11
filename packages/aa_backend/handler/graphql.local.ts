import {ApolloServer} from 'apollo-server'
import {context} from '../graphql/context'
import {dataSources} from '../graphql/dataSources'
import {schema} from '../graphql/schema/local'

process.env.TZ = 'utc'

console.log({schema})
const server = new ApolloServer({
  schema,
  context,
  dataSources,
  introspection: true,
  tracing: true,
})

const port = 4000
server
  .listen(port)
  .then(() => console.log(`local graphql(port: ${port})`))

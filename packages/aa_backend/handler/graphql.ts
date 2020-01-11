import {APIGatewayProxyHandler} from 'aws-lambda'
import {schema} from '../graphql/schema'
import {ApolloServer} from 'apollo-server-lambda'
import {context} from '../graphql/context'
import {dataSources} from '../graphql/dataSources'
import {const_cors, const_is_production} from '../constant'

const server = new ApolloServer({
  schema,
  context,
  dataSources,
  introspection: !const_is_production,
  playground: !const_is_production,
})

export const handler: APIGatewayProxyHandler = server.createHandler({
  cors: {
    origin: const_cors,
    credentials: true,
    maxAge: 86400,
  }
})

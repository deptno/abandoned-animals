import {makeExecutableSchema} from 'apollo-server-lambda'
import {typeDefs} from './typeDefs'
import {resolvers} from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

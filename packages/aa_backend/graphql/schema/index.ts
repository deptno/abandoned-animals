import {makeExecutableSchema} from 'apollo-server-lambda'
import {typeDefs} from './typeDefs/local'
import {resolvers} from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

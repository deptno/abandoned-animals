import {makeExecutableSchema} from 'apollo-server-micro'
import {typeDefs} from './typeDefs/local'
import {resolvers} from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

import {gql, makeExecutableSchema} from 'apollo-server'
import {readFileSync} from 'fs'
import {join} from 'path'
import {resolvers} from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs: gql(readFileSync(join(__dirname, 'schema.graphql')).toString()),
  resolvers
})

import {gql} from 'apollo-server'
import {readFileSync} from 'fs'
import {join} from 'path'

export const typeDefs = gql(readFileSync(join(__dirname, '..', 'schema.graphql')).toString())

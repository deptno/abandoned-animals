import {env} from './env'
import {aa} from './aa'
import {QueryResolvers} from '@deptno/aa_graphql_type'

export const Query: QueryResolvers = {
  env,
  aa
}

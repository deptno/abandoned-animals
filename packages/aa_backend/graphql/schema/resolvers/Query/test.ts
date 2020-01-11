import {const_return_env_string} from '../../../../constant'
import {QueryResolvers} from '@deptno/aa_graphql_type'

export const test: QueryResolvers['test'] = (args, context) => {
  return const_return_env_string
}
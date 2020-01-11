import {const_return_env_string} from '../../../../constant'
import {QueryResolvers} from '@deptno/aa_graphql_type'

export const env: QueryResolvers['env'] = (args, context) => {
  return JSON.stringify({
    claim: context.claim,
    env_string: const_return_env_string
  })
}
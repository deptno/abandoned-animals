import {const_is_production} from '../../../../constant'
import {QueryResolvers} from '@deptno/aa_graphql_type'

export const production: QueryResolvers['production'] = (args, context) => {
  return const_is_production
}
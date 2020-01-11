import {QueryResolvers} from '@deptno/aa_graphql_type'

export const aa: QueryResolvers['aa'] = (_, args, context) => {
  return true
}
import {QueryResolvers} from '@deptno/aa_graphql_type'

export const aa: QueryResolvers['aa'] = async (_, args, context) => {
  const animals = await context.dataSources.aa.getAbandonedAnimals()

  return animals || ''
}
import {QueryResolvers} from '@deptno/aa_graphql_type'
import {checkPageArgs, edgesOf, Shaper} from '../../../lib/graphql-tool'
import {AbandonedAnimal} from '@deptno/aa_parser'

export const aa: QueryResolvers['aa'] = async (_, args, context) => {
  checkPageArgs(args)

  return context.dataSources.aa
    .getAbandonedAnimals(args)
    .then(edgesOf(createAbandonedAnimal))
}

const createAbandonedAnimal: Shaper<AbandonedAnimal, AbandonedAnimal> = (a) => {
  return a
}

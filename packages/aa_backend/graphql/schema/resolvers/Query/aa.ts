import {QueryResolvers} from '@deptno/aa_graphql_type'
import {checkPageArgs, edgesOf, normalizedArgs, Shaper} from '../../../lib/graphql-tool'
import {AbandonedAnimal} from '@deptno/aa_parser'
import {util} from '@deptno/dynamodb'
import {Raw} from '@deptno/aa_data_source/dist/entity'

export const aa: QueryResolvers['aa'] = async (_, args, context) => {
  checkPageArgs(args)

  return context.dataSources.aa
    .getAbandonedAnimals(normalizedArgs(args))
    .then(edgesOf(createAbandonedAnimal))
}

const createAbandonedAnimal: Shaper<Raw, AbandonedAnimal> = (a) => {
  return util.unGzip(a.z)
}

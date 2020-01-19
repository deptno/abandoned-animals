import {ddb} from '../lib/ddb'
import {const_aws_ddb_table} from '../constant'
import {AADocumentRkEnum, Raw} from '@deptno/aa_data_source/dist/entity'

export const getRegisteredAnimals = ({startDate, endDate}: Input) => {
  const params = {
    TableName: const_aws_ddb_table,
    IndexName: 'rkT',
    KeyConditionExpression: '#h = :h AND #r BETWEEN :s AND :e',
    ExpressionAttributeNames: {
      '#h': 'rk',
      '#r': 't',
    },
    ExpressionAttributeValues: {
      ':h': AADocumentRkEnum.raw,
      ':s': Raw.key.t.stringify({
        rk: AADocumentRkEnum.raw,
        createdAt: startDate
      }),
      ':e': Raw.key.t.stringify({
        rk: AADocumentRkEnum.raw,
        createdAt: endDate
      }),
    },
    ProjectionExpression: 'hk',
    ReturnConsumedCapacity: 'TOTAL'
  }

  console.log({params})

  return ddb.query<Raw>(params)
    .then(response => response.items.map(a => a.hk))
    .catch(_ => []) as Promise<string[]>
}

type Input = {
  startDate: string
  endDate: string
}
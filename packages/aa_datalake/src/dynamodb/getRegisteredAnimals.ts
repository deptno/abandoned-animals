import {ddb} from '../lib/ddb'
import {const_aws_ddb_table} from '../constant'
import {AADocumentRkEnum, Raw} from '@deptno/aa_data_source/dist/entity'
import {addDays, format, parse} from 'date-fns'

export const getRegisteredAnimals = ({startDate, endDate}: Input) => {
  const now = new Date()
  const startDateKST = parse(`${startDate}+0900`, 'yyyyMMddxx', now)
  const endDateKST = addDays(
    parse(`${endDate}+0900`, 'yyyyMMddxx', now),
    1,
  )
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
        createdAt: format(startDateKST, 'yyyy-MM-dd'),
      }),
      ':e': Raw.key.t.stringify({
        rk: AADocumentRkEnum.raw,
        createdAt: format(endDateKST, 'yyyy-MM-dd'),
      }),
    },
    ProjectionExpression: 'hk',
    ReturnConsumedCapacity: 'TOTAL',
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
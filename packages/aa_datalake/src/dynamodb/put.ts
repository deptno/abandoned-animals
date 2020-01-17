import {ddb} from '../lib/ddb'
import {const_aws_ddb_table} from '../constant'
import {AADocument} from './entity/interface'

export const put = (items: AADocument[]) => {
  return ddb.batchWrite({
    tableName: const_aws_ddb_table,
    items,
  })
}
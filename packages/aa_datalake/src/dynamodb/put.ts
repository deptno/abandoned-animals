import {ddb} from '../lib/ddb'
import {const_aws_ddb_table} from '../constant'
import {AADocument} from './entity/interface'

export const put = (items: AADocument[]) => {
  console.log(const_aws_ddb_table, items.length, items[0])
  return ddb.batchWrite({
    tableName: const_aws_ddb_table,
    items,
  })
}
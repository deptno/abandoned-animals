import {AADynamoDBDataSource} from '@deptno/aa_data_source'

export type Context = {
  claim: unknown
  dataSources: {
    aa: AADynamoDBDataSource
  }
}
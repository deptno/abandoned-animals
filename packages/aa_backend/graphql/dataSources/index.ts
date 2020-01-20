import {DynamoDB} from 'aws-sdk'
import {const_aws_ddb_table} from '@deptno/aa_datalake/src/constant'
import {AADynamoDBDataSource} from '@deptno/aa_data_source'

export const dataSources = () => {
  return {
    aa: new AADynamoDBDataSource(documentClient, const_aws_ddb_table)
  }
}

const region = 'ap-northeast-2'
const documentClient = new DynamoDB.DocumentClient({region})

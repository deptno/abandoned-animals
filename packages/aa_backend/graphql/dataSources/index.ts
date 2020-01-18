import {AADynamoDBDataSource} from '@deptno/aa_data_source'
import {DynamoDB} from 'aws-sdk'

export const dataSources = () => {
  return {
    aa: new AADynamoDBDataSource(documentClient)
  }
}

const region = 'ap-northeast-2'
const documentClient = new DynamoDB.DocumentClient({region})

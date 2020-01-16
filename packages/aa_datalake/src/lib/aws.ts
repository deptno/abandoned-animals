import {DynamoDB} from 'aws-sdk'
import {const_aws_region} from '../constant'

export const documentClient = new DynamoDB.DocumentClient({
  region: const_aws_region
})
import {createDynamoDB} from '@deptno/dynamodb'
import {documentClient} from './aws'

export const ddb = createDynamoDB(documentClient)


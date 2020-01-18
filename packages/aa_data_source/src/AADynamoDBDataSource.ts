import {DataSource} from 'apollo-datasource'
import {Species} from './type'
import {createDynamoDB} from '@deptno/dynamodb'
import {DocumentClient} from 'aws-sdk/clients/dynamodb'
import {Raw} from './entity'

export class AADynamoDBDataSource extends DataSource {
  #ddb: ReturnType<typeof createDynamoDB>

  constructor(documentClient: DocumentClient) {
    super()
    this.#ddb = createDynamoDB(documentClient)
  }

  async getAbandonedAnimals(
    input: {
      first: number
      last?: string
      species?: Species
      after?: string
      before?: string
      page?: number
      limit?: number
    },
  ) {
    //todo: before, scanforward false
    return this.#ddb.scan<Raw>({
      TableName: 'dev-aa',
      Limit: input.first,
      ExclusiveStartKey: (input.after || input.before) as any,
      ReturnConsumedCapacity: 'TOTAL'
    })
  }
}
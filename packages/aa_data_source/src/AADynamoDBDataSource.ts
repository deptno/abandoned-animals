import {DataSource} from 'apollo-datasource'
import {Species} from './type'
import {createDynamoDB} from '@deptno/dynamodb'
import {DocumentClient} from 'aws-sdk/clients/dynamodb'
import {AADocumentRkEnum, Raw} from './entity'

export class AADynamoDBDataSource extends DataSource {
  #ddb: ReturnType<typeof createDynamoDB>
  #tableName: string

  constructor(documentClient: DocumentClient, tableName: string) {
    super()
    this.#ddb = createDynamoDB(documentClient)
    this.#tableName = tableName
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
    return this.#ddb.query<Raw>({
      TableName: this.#tableName,
      IndexName: 'rkT',
      KeyConditionExpression: '#h = :h',
      ExpressionAttributeNames: {
        '#h': 'rk',
      },
      ExpressionAttributeValues: {
        ':h': AADocumentRkEnum.raw,
      },
      ExclusiveStartKey: (input.after || input.before) as any,
      Limit: input.first,
      ReturnConsumedCapacity: 'TOTAL'
    })
  }
}
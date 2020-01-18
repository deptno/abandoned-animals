import {DataSource} from 'apollo-datasource'
import {Species} from './type'
import {createDynamoDB, util} from '@deptno/dynamodb'
import {DocumentClient} from 'aws-sdk/clients/dynamodb'
import {Raw} from '@deptno/aa_datalake/src/dynamodb/entity/raw'

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
      page?: number
      limit?: number
    },
  ) {
    return this.#ddb.scan<Raw>({
      TableName: 'dev-aa',
      Limit: input.first,
      ReturnConsumedCapacity: 'TOTAL'
    })
      .then(rs => rs.map(r => util.unGzip(r.z)))
  }
}
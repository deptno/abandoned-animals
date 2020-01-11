import {Context} from '@deptno/aa_backend/graphql/context'
import {DataSource} from 'apollo-datasource'

export class AA extends DataSource<Context> {
  getHello() {
    return 'world'
  }
}
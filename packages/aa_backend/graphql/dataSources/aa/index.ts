import {Context} from '../../context'
import {DataSource} from 'apollo-datasource'

export class AA extends DataSource<Context> {
  getHello() {
    return 'world'
  }
}
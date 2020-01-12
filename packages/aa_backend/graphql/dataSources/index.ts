import {AADataSource} from '@deptno/aa_data_source'
import {const_open_api_key} from '../../constant'

export const dataSources = () => {
  return {
    aa: new AADataSource(const_open_api_key)
  }
}
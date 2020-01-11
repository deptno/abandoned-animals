import {AA} from '@deptno/aa_data_source'

export const dataSources = () => {
  return {
    aa: new AA()
  }
}
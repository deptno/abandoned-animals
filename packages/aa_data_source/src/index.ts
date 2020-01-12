import {DataSource} from 'apollo-datasource'
import {AbandonmentPublicRequest} from '@deptno/aa_type'
import fetch from 'node-fetch'
import {stringify} from 'querystring'

export class AADataSource extends DataSource {
  #endpoint = 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic'
  #key: string

  constructor(key: string) {
    super()

    this.#key = key
  }

  getHello() {
    return 'world'
  }

  getAbandonedAnimals() {
    // fixme: 중복
    const qs: AbandonmentPublicRequest = {
      ServiceKey: this.#key,
      bgnde: '20190601',
      endde: '20191229',
      upkind: '417000',
      kind: '',
      upr_cd: '',
      org_cd: '',
      care_reg_no: '',
      state: 'notice',
      pageNo: '1',
      numOfRows: '10', // 9999
      neuter_yn: '',
    }

    return fetch([this.#endpoint, stringify(qs)].join('?'))
      .then(r => r.text())
      .catch(console.error)
  }
}
import fetch from 'node-fetch'
import {stringify} from 'querystring'
import {const_ep_openapi_abandonment, const_key_service} from '../../constant'

export const getAbandonedAnimals = () => {
  const qs = {
    ServiceKey: const_key_service,
    bgnde: '20190601',
    endde: '20191229',
    upkind: '417000',
    kind: '',
    upr_cd: '',
    org_cd: '',
    care_reg_no: '',
    state: 'notice',
    pageNo: '1',
    numOfRows: '10',
    neuter_yn: '',
  }

  return fetch([const_ep_openapi_abandonment, stringify(qs)].join('?'))
    .then(r => r.text())
    .catch(console.error)
}

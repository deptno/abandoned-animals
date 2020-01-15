import fetch from 'node-fetch'
import {stringify} from 'querystring'
import {const_ep_openapi_abandonment} from '../constant'
import {AbandonmentPublicRequest} from '@deptno/aa_type'

export const getAbandonedAnimals = (input: AbandonmentPublicRequest) => {
  const url = [const_ep_openapi_abandonment, stringify(input)].join('?')

  return fetch(url).then(r => r.text())
}

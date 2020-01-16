import {defined} from '@deptno/aa_assert'

export const const_ep_openapi_abandonment = 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic'
export const const_open_api_key = process.env.AA_OPENAPI_KEY!

defined(!const_open_api_key)

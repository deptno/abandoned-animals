import fetch from 'node-fetch'
import {stringify} from 'querystring'
import {const_ep_openapi_abandonment, const_key_service} from '../../constant'
import {yyyyMMdd} from '@deptno/aa_assert'
import {AbandonmentPublicRequest} from '@deptno/aa_type'

export const getAbandonedAnimals = (input: Input) => {
  yyyyMMdd(input.startDate)
  yyyyMMdd(input.endDate)

  const qs: AbandonmentPublicRequest = {
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
    numOfRows: '10', // 9999
    neuter_yn: '',
  }

  return fetch([const_ep_openapi_abandonment, stringify(qs)].join('?'))
    .then(r => r.text())
    .catch(console.error)
}

type Input = {
  startDate: string // bgnde
  endDate: string // endde
  species: 'dog'|'cat'|'etc'
  kind: string // 축종코드
}

interface RequestCommonParam {
  ServiceKey: string
  pageNo: string
  numOfRows: string
}
interface RequestParam extends RequestCommonParam {
  bgnde: string
  endde: string
  upkind: string
  kind: string
  upr_cd: string
  org_cd: string
  care_reg_no: string
  state: string
  neuter_yn: string
}
interface ResponseCommon {
  resultCode: string
  resultMsg: string
}
interface Response extends ResponseCommon {
  /* 유기번호 */
  desertionNo: string
  /* 썸네일 이미지 */
  filename: string
  /* 접수일 */
  happenDt: string
  /* 발견장소 */
  happenPlace: string
  /* 이미지 */
  kindCd: string
  /* 이미지 */
  colorCd: string
  /* 이미지 */
  age: string
  /* 이미지 */
  weight: string
  /* 이미지 */
  noticeNo: string
  /* 이미지 */
  noticeSdt: string
  /* 이미지 */
  noticeEdt: string
  /* 이미지 */
  popfile: string
  /* 이미지 */
  processState: string
  /* 이미지 */
  sexCd: string
  /* 이미지 */
  neuterYn: string
  /* 이미지 */
  specialMark: string
  /* 이미지 */
  careTel: string
  /* 이미지 */
  careAddr: string
  /* 이미지 */
  orgNm: string
  /* 이미지 */
  chargeNm: string
  /* 이미지 */
  officetel: string
  /* 이미지 */
  noticeComment: string
  /* 이미지 */
  numOfRows: string
  /* 이미지 */
  pageNo: string
  /* 이미지 */
  totalCount: string
  /* 이미지 */
}

import {ParsedUrlQueryInput} from 'querystring'

interface ResponseCommon {
  /* 결과 코드 */
  resultCode: string
  /* 결과 메시지 */
  resultMsg: string
}
interface RequestCommon extends ParsedUrlQueryInput {
  /* 서비스 API 키 */
  ServiceKey: string
  /* 페이지 번호 */
  pageNo: string
  /* 로우 수 */
  numOfRows: string
}

export interface AbandonmentPublicRequest extends RequestCommon {
  /* 검색 시작일 */
  bgnde: string
  /* 검색 종료일 */
  endde: string
  /* 축종코드 */
  upkind: string
  /* 품종코드 */
  kind: string
  /* 시도코드 */
  upr_cd: string
  /* 시군구코드 */
  org_cd: string
  /* 보호소번호 */
  care_reg_no: string
  /* 상태 */
  state: string
  /* 중성화여부 */
  neuter_yn: string
}
export interface AbandonmentPublicResponse extends ResponseCommon {
  /* 유기번호 */
  desertionNo: string
  /* 썸네일 이미지 */
  filename: string
  /* 접수일 */
  happenDt: string
  /* 발견장소 */
  happenPlace: string
  /* 품종 */
  kindCd: string
  /* 색상 */
  colorCd: string
  /* 나이 */
  age: string
  /* 체중 */
  weight: string
  /* 공고번호 */
  noticeNo: string
  /* 공고시작일 */
  noticeSdt: string
  /* 공고종료일 */
  noticeEdt: string
  /* 이미지 */
  popfile: string
  /* 상태 */
  processState: string
  /* 성별 */
  sexCd: string
  /* 중성화 여부 */
  neuterYn: string
  /* 특징 */
  specialMark: string
  /* 보호소 이름 */
  careNm: string
  /* 보호소 전화번호 */
  careTel: string
  /* 보호장소 */
  careAddr: string
  /* 관할기관 */
  orgNm: string
  /* 담당자 */
  chargeNm: string
  /* 담당자연락처 */
  officetel: string
  /* 특이사항 */
  noticeComment: string
  /* 한 페이지 결과 수 */
  numOfRows: string
  /* 페이지 번호 */
  pageNo: string
  /* 전체 결과 수 */
  totalCount: string
}
import {JsonResponse, xmlToJson} from '../xmlToJson'

export const parseAbandonedAnimals: (str: string) => Promise<JsonResponse<AbandonedAnimal>> = xmlToJson

type AbandonedAnimal = {
// 공고종료일		8	1	20140303	공고종료일 (YYYYMMDD)
  noticeEdt: string // Image		100	1	http://www.animal.go.kr /files/shelter/2014/02/201403010903285.jpg	Image
  popfile: string
// 상태		10	1	종료(입양)	상태
  processState: string
// 성별		1	1	F	M : 수컷 F : 암컷 Q : 미상
  sexCd: string
// 중성화여부		1	1	Y	Y : 예 N : 아니오 U : 미상
  neuterYn: string
// 특징		200	1	치석있으며건강함	특징
  specialMark: string
// 보호소이름		50	1	유기동물보호소	보호소이름
  careNm: string
// 보호소전화번호		14	1	02-123-4567	보호소전화번호
  careTel: string
// 보호장소		200	1	서울특별시 양천구 신월3동	보호장소
  careAddr: string
// 관할기관		50	1	서울특별시 양천구	관할기관
  orgNm: string
// 담당자		20	1	홍길동	담당자
  chargeNm: string
// 담당자연락처		14	1	02-1111-2222	담당자연락처
  officetel: string
// 특이사항		200	1	없음	특이사항
  noticeComment: string
// 한 	numOfRows	4	1	10	한페이지 결과수
  페이지결과수: string
// 페이지 	pageNo	4	1	1	페이지 번호
  번호: string
// 전체  수	totalCount	4	1	6840	전체 결과 수
  결과: string
// 결과코드		2	1	00	결과코드
  resultCode: string
// 결과메세지		50	1	NORMAL SERVICE.	결과메세지
  resultMsg: string
// 유기번호		20	1	411314201400052	유기번호
  desertionNo: string
// Thumbnail_Image		100	1	http://www.animal.go.kr /files/shelter/2014/02/201403010903285_s.jpg	Thumbnail Image
  filename: string
// 접수일		8	1	20140301	접수일 (YYYYMMDD)
  happenDt: string
// 발견장소		100	1	신월3동195-1	발견장소
  happenPlace: string
// 품종		50	1	[개] 믹스견	품종
  kindCd: string
// 색상		30	1	갈/검/흰	색상
  colorCd: string
// 나이		30	1	3살추정	나이
  age: string
// 체중		30	1	3.8(Kg)	체중
  weight: string
// 공고번호		30	1	서울-양천-2014-00050	공고번호
  noticeNo: string
// 공고시작일		8	1	20140303	공고시작일 (YYYYMMDD)
  noticeSdt: string
}

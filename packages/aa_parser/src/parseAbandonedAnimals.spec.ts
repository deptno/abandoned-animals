import {parseAbandonedAnimals} from './parseAbandonedAnimals'
import {xmlToJson} from './lib/xmlToJson'

describe('AbandonedAnimalsDataSource', () => {
  it('xmlToJson()', function () {
    /**
     * 모든 데이터가 정의되고 아이템 내부의 모든 값은 Array 로 되어있다.
     */
    return xmlToJson(mocked).then(response => {
      expect(response.header).toBeDefined()
      expect(response.header.code).toBeDefined()
      expect(response.header.msg).toBeDefined()
      expect(response.body).toBeDefined()
      expect(response.body.items).toBeDefined()
      expect(response.body.totalCount).toBeDefined()
      expect(response.body.pageNo).toBeDefined()
      expect(response.body.numOfRows).toBeDefined()
      expect(response.body.items.length).toEqual(response.body.numOfRows)
      expect(
        Object
          .values(response.body.items[0] as object)
          .every(Array.isArray),
      ).toEqual(true)
    })
  })
  it('parseAbandonedAnimals()', function () {
    return parseAbandonedAnimals(mocked).then(response => {
      const [item] = response.body.items
//      expect(item.noticeComment).toBeDefined()
//      expect(Array.isArray(item.noticeComment)).toEqual(false)
//      expect(item.resultCode).toBeDefined()
//      expect(Array.isArray(item.resultCode)).toEqual(false)
//      expect(item.resultMsg).toBeDefined()
//      expect(Array.isArray(item.resultMsg)).toEqual(false)
      expect(item.age).toBeDefined()
      expect(Array.isArray(item.age)).toEqual(false)
      expect(item.careAddr).toBeDefined()
      expect(Array.isArray(item.careAddr)).toEqual(false)
      expect(item.careNm).toBeDefined()
      expect(Array.isArray(item.careNm)).toEqual(false)
      expect(item.careTel).toBeDefined()
      expect(Array.isArray(item.careTel)).toEqual(false)
      expect(item.colorCd).toBeDefined()
      expect(Array.isArray(item.colorCd)).toEqual(false)
      expect(item.desertionNo).toBeDefined()
      expect(Array.isArray(item.desertionNo)).toEqual(false)
      expect(item.filename).toBeDefined()
      expect(Array.isArray(item.filename)).toEqual(false)
      expect(item.happenDt).toBeDefined()
      expect(Array.isArray(item.happenDt)).toEqual(false)
      expect(item.happenPlace).toBeDefined()
      expect(Array.isArray(item.happenPlace)).toEqual(false)
      expect(item.kindCd).toBeDefined()
      expect(Array.isArray(item.kindCd)).toEqual(false)
      expect(item.neuterYn).toBeDefined()
      expect(Array.isArray(item.neuterYn)).toEqual(false)
      expect(item.noticeEdt).toBeDefined()
      expect(Array.isArray(item.noticeEdt)).toEqual(false)
      expect(item.noticeNo).toBeDefined()
      expect(Array.isArray(item.noticeNo)).toEqual(false)
      expect(item.noticeSdt).toBeDefined()
      expect(Array.isArray(item.noticeSdt)).toEqual(false)
      expect(item.officetel).toBeDefined()
      expect(Array.isArray(item.officetel)).toEqual(false)
      expect(item.orgNm).toBeDefined()
      expect(Array.isArray(item.orgNm)).toEqual(false)
      expect(item.popfile).toBeDefined()
      expect(Array.isArray(item.popfile)).toEqual(false)
      expect(item.processState).toBeDefined()
      expect(Array.isArray(item.processState)).toEqual(false)
      expect(item.sexCd).toBeDefined()
      expect(Array.isArray(item.sexCd)).toEqual(false)
      expect(item.specialMark).toBeDefined()
      expect(Array.isArray(item.specialMark)).toEqual(false)
    })
  })
})

const mocked = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><response><header><resultCode>00</resultCode><resultMsg>NORMAL SERVICE.</resultMsg></header><body><items><item><age>2019(년생)</age><careAddr>경상북도 청도군 화양읍 청화3길 10 (화양읍) 3층 농정과</careAddr><careNm>청도동물보호소</careNm><careTel>054-370-6557</careTel><chargeNm>청도군</chargeNm><colorCd>매전면 관방 269</colorCd><desertionNo>447519202000013</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401221_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>매전면 관방 269</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>U</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>경북-청도-2020-00013</noticeNo><noticeSdt>20200115</noticeSdt><officetel>054-370-6557</officetel><orgNm>경상북도 청도군</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401221.png</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>온순함, 주황색 목줄</specialMark><weight>25(Kg)</weight></item><item><age>2020(년생)</age><careAddr>경상북도 영덕군 영덕읍 구미2길 14-1 (영덕읍) 영덕군유기동물보호센터</careAddr><careNm>영덕유기동물보호센터</careNm><careTel>054-730-6286</careTel><chargeNm>홍성철</chargeNm><colorCd>검정</colorCd><desertionNo>447518202000012</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401735_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>경북 영덕군 영덕읍 화개리 644</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>U</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>경북-영덕-2020-00012</noticeNo><noticeSdt>20200115</noticeSdt><officetel>054-730-6286</officetel><orgNm>경상북도 영덕군</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401735.jpg</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>입질이 심함</specialMark><weight>3(Kg)</weight></item><item><age>2019(년생)</age><careAddr>경상북도 영덕군 영덕읍 구미2길 14-1 (영덕읍) 영덕군유기동물보호센터</careAddr><careNm>영덕유기동물보호센터</careNm><careTel>054-730-6286</careTel><chargeNm>홍성철</chargeNm><colorCd>검정</colorCd><desertionNo>447518202000011</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401990_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>경북 영덕군 영덕읍 화개리 644</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>U</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>경북-영덕-2020-00011</noticeNo><noticeSdt>20200115</noticeSdt><officetel>054-730-6286</officetel><orgNm>경상북도 영덕군</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401990.jpg</popfile><processState>보호중</processState><sexCd>F</sexCd><specialMark>입질이 심함</specialMark><weight>3(Kg)</weight></item><item><age>2019(년생)</age><careAddr>경상북도 영덕군 영덕읍 구미2길 14-1 (영덕읍) 영덕군유기동물보호센터</careAddr><careNm>영덕유기동물보호센터</careNm><careTel>054-730-6286</careTel><chargeNm>홍성철</chargeNm><colorCd>검정</colorCd><desertionNo>447518202000010</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401922[1]_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>경북 영덕군 영덕읍 화개리 644</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>U</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>경북-영덕-2020-00010</noticeNo><noticeSdt>20200115</noticeSdt><officetel>054-730-6286</officetel><orgNm>경상북도 영덕군</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401922[1].jpg</popfile><processState>보호중</processState><sexCd>F</sexCd><specialMark>사나움</specialMark><weight>3(Kg)</weight></item><item><age>2017(년생)</age><careAddr>경상북도 경산시 용성면 사양지길 95 (용성면) </careAddr><careNm>경산시유기동물보호소</careNm><careTel>010-3506-3661</careTel><colorCd>흰색</colorCd><desertionNo>447513202000042</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401269_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>진량 선화리</happenPlace><kindCd>[개] 포메라니안</kindCd><neuterYn>Y</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>경북-경산-2020-00042</noticeNo><noticeSdt>20200115</noticeSdt><officetel>053-810-6745</officetel><orgNm>경상북도 경산시</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401269.jpg</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>라이온즈파크 옆 대나무 숲에 유기</specialMark><weight>2(Kg)</weight></item><item><age>2018(년생)</age><careAddr>전라남도 광양시 봉강면 인덕로 1169-20 (봉강면) 지곡리 864-24</careAddr><careNm>광양시 임시보호소</careNm><careTel>061-797-3386</careTel><chargeNm>광양시</chargeNm><colorCd>흰색 </colorCd><desertionNo>446484202000020</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151201662_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>황금동 항만 12로 주변</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>N</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>전남-광양-2020-00020</noticeNo><noticeSdt>20200115</noticeSdt><officetel>061-797-3386</officetel><orgNm>전라남도 광양시</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151201662.jpg</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>믹스 흰색 수컷 2살추정</specialMark><weight>13.2(Kg)</weight></item><item><age>2018(년생)</age><careAddr>전라북도 전주시 완산구 경원동1가 3-10</careAddr><careNm>동부동물병원</careNm><careTel>063-231-2455</careTel><chargeNm>김민석</chargeNm><colorCd>흰색갈색</colorCd><desertionNo>445464202000112</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151301806_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>모래내연정형외과앞</happenPlace><kindCd>[개] 시츄</kindCd><neuterYn>Y</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>전북-전주-2020-00058</noticeNo><noticeSdt>20200115</noticeSdt><officetel>063-281-5073</officetel><orgNm>전라북도 전주시</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151301806.jpg</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>귀털남기고 미용됨</specialMark><weight>7.5(Kg)</weight></item><item><age>2019(년생)</age><careAddr>충청남도 서천군 마산면 한마로 1189-19 </careAddr><careNm>서천유기동물보호소</careNm><careTel>041-950-4388</careTel><chargeNm>서천군</chargeNm><colorCd>흰색, 검은색</colorCd><desertionNo>444458202000009</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151301775_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>서천군 화양면 화한로202번길 68 주변</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>N</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>충남-서천-2020-00008</noticeNo><noticeSdt>20200115</noticeSdt><officetel>041-950-4388</officetel><orgNm>충청남도 서천군</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151301775.jpg</popfile><processState>보호중</processState><sexCd>M</sexCd><specialMark>.</specialMark><weight>20(Kg)</weight></item><item><age>2020(년생)</age><careAddr>충청남도 논산시 시민로210번길 9 (내동, 논산시청) 논산시청</careAddr><careNm>논산시청</careNm><careTel>041-746-6115</careTel><chargeNm>논산시</chargeNm><colorCd>베이지 </colorCd><desertionNo>444454202000027</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401849_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>건양대 원룸 근처</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>N</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>충남-논산-2020-00027</noticeNo><noticeSdt>20200115</noticeSdt><officetel>041-746-6112</officetel><orgNm>충청남도 논산시</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401849.jpeg</popfile><processState>보호중</processState><sexCd>F</sexCd><specialMark>건강함 </specialMark><weight>13(Kg)</weight></item><item><age>2016(년생)</age><careAddr>충청북도 청주시 흥덕구 강내면 서부로 411-55 (강내면) </careAddr><careNm>반려동물보호센터</careNm><careTel>043-201-2298</careTel><chargeNm>박종관</chargeNm><colorCd>베이지,갈색</colorCd><desertionNo>443571202000063</desertionNo><filename>http://www.animal.go.kr/files/shelter/2020/01/202001151401476_s.jpg</filename><happenDt>20200115</happenDt><happenPlace>용암북로92번길11 한빛 빌리지</happenPlace><kindCd>[개] 믹스견</kindCd><neuterYn>N</neuterYn><noticeEdt>20200128</noticeEdt><noticeNo>충북-청주-2020-00118</noticeNo><noticeSdt>20200115</noticeSdt><officetel>043-201-2296</officetel><orgNm>충청북도 청주시</orgNm><popfile>http://www.animal.go.kr/files/shelter/2020/01/202001151401476.jpg</popfile><processState>보호중</processState><sexCd>F</sexCd><specialMark>마르고 겁이 많아요 겁이 많은건알겠는데 내 신발에 소변을 누면 어떻게해...ㅠ</specialMark><weight>4(Kg)</weight></item></items><numOfRows>10</numOfRows><pageNo>1</pageNo><totalCount>588</totalCount></body></response>`
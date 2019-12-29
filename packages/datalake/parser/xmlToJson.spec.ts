import {xmlToJson} from './xmlToJson'

describe('function: datalake/parser/xmlToJson', () => {
  it('parse openapi response ', async () => {
    const openapi = /* language=xml */ `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<response>
    <header>
        <resultCode>00</resultCode>
        <resultMsg>NORMAL SERVICE.</resultMsg>
    </header>
    <body>
        <items>
            <item>
                <age>2016(년생)</age>
                <careAddr>인천광역시 강화군 강화읍 강화대로 217 (강화읍, 린나이보일러)</careAddr>
                <careNm>베스트동물병원</careNm>
                <careTel>032-934-9340</careTel>
                <chargeNm>강화군청</chargeNm>
                <colorCd>쵸코색</colorCd>
                <desertionNo>428357201901158</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912230112474_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>고인돌 박물관 부근</happenPlace>
                <kindCd>[개] 푸들</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20200102</noticeEdt>
                <noticeNo>인천-강화-2019-00646</noticeNo>
                <noticeSdt>20191223</noticeSdt>
                <officetel>032-934-9340</officetel>
                <orgNm>인천광역시 강화군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912230112474.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>F</sexCd>
                <specialMark>네 발목 털 깍음</specialMark>
                <weight>5.42(Kg)</weight>
            </item>
            <item>
                <age>2019(년생)</age>
                <careAddr>인천광역시 강화군 강화읍 강화대로 217 (강화읍, 린나이보일러)</careAddr>
                <careNm>베스트동물병원</careNm>
                <careTel>032-934-9340</careTel>
                <chargeNm>강화군청</chargeNm>
                <colorCd>흰색,갈색</colorCd>
                <desertionNo>428357201901157</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912230012916_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>능내리842 부근</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20200102</noticeEdt>
                <noticeNo>인천-강화-2019-00645</noticeNo>
                <noticeSdt>20191223</noticeSdt>
                <officetel>032-934-9340</officetel>
                <orgNm>인천광역시 강화군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912230012916.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>M</sexCd>
                <specialMark>생후2개월령,흰색 가름마</specialMark>
                <weight>3.78(Kg)</weight>
            </item>
            <item>
                <age>2018(년생)</age>
                <careAddr>경상남도 하동군 적량면 동산리 1694</careAddr>
                <careNm>하동군유기동물보호소</careNm>
                <careTel>055-880-2436</careTel>
                <chargeNm>하동군</chargeNm>
                <colorCd>검정, 갈색</colorCd>
                <desertionNo>448544201900450</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201512157_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>하동군 적량면 중도길2-9</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20191230</noticeEdt>
                <noticeNo>경남-하동-2019-00398</noticeNo>
                <noticeSdt>20191221</noticeSdt>
                <officetel>055-880-2439</officetel>
                <orgNm>경상남도 하동군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201512157.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>F</sexCd>
                <specialMark>사람을 피함</specialMark>
                <weight>1(Kg)</weight>
            </item>
            <item>
                <age>2016(년생)</age>
                <careAddr>경상남도 하동군 적량면 동산리 1694</careAddr>
                <careNm>하동군유기동물보호소</careNm>
                <careTel>055-880-2436</careTel>
                <chargeNm>하동군</chargeNm>
                <colorCd>흰색</colorCd>
                <desertionNo>448544201900449</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201512915_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>하동군 적량면 중도길2-9</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20191230</noticeEdt>
                <noticeNo>경남-하동-2019-00411</noticeNo>
                <noticeSdt>20191221</noticeSdt>
                <officetel>055-880-2439</officetel>
                <orgNm>경상남도 하동군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201512915.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>F</sexCd>
                <specialMark>사람을 피함</specialMark>
                <weight>7(Kg)</weight>
            </item>
            <item>
                <age>2018(년생)</age>
                <careAddr>경상남도 하동군 적량면 동산리 1694</careAddr>
                <careNm>하동군유기동물보호소</careNm>
                <careTel>055-880-2436</careTel>
                <chargeNm>하동군</chargeNm>
                <colorCd>검정, 흰색</colorCd>
                <desertionNo>448544201900448</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201512201_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>하동군 적량면 중도길2-9</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20191230</noticeEdt>
                <noticeNo>경남-하동-2019-00410</noticeNo>
                <noticeSdt>20191221</noticeSdt>
                <officetel>055-880-2439</officetel>
                <orgNm>경상남도 하동군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201512201.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>F</sexCd>
                <specialMark>사람을 피함</specialMark>
                <weight>1(Kg)</weight>
            </item>
            <item>
                <age>2018(년생)</age>
                <careAddr>경상남도 하동군 적량면 동산리 1694</careAddr>
                <careNm>하동군유기동물보호소</careNm>
                <careTel>055-880-2436</careTel>
                <chargeNm>하동군</chargeNm>
                <colorCd>흰색</colorCd>
                <desertionNo>448544201900447</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201112831[1]_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>하동군 적량면 중도길2-9</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20191230</noticeEdt>
                <noticeNo>경남-하동-2019-00409</noticeNo>
                <noticeSdt>20191221</noticeSdt>
                <officetel>055-880-2439</officetel>
                <orgNm>경상남도 하동군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201112831[1].jpg</popfile>
                <processState>보호중</processState>
                <sexCd>M</sexCd>
                <specialMark>사람을 피함</specialMark>
                <weight>1(Kg)</weight>
            </item>
            <item>
                <age>2018(년생)</age>
                <careAddr>경상남도 하동군 적량면 동산리 1694</careAddr>
                <careNm>하동군유기동물보호소</careNm>
                <careTel>055-880-2436</careTel>
                <chargeNm>하동군</chargeNm>
                <colorCd>걸샥</colorCd>
                <desertionNo>448544201900446</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201112457_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>하동군 적량면 중도길2-9</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20191230</noticeEdt>
                <noticeNo>경남-하동-2019-00408</noticeNo>
                <noticeSdt>20191221</noticeSdt>
                <officetel>055-880-2439</officetel>
                <orgNm>경상남도 하동군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201112457.jpg</popfile>
                <processState>보호중</processState>
                <sexCd>M</sexCd>
                <specialMark>사람을피함</specialMark>
                <weight>1(Kg)</weight>
            </item>
            <item>
                <age>2019(년생)</age>
                <careAddr>충청북도 증평군 도안면 입장길 239 (도안면)</careAddr>
                <careNm>괴산증평동물보호센터</careNm>
                <careTel>010-3169-1151</careTel>
                <chargeNm>이제훈</chargeNm>
                <colorCd>흰색</colorCd>
                <desertionNo>443446201900423</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201312159_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>괴산군 칠성면 외사리 146-1</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20200103</noticeEdt>
                <noticeNo>충북-괴산-2019-00314</noticeNo>
                <noticeSdt>20191220</noticeSdt>
                <officetel>043-830-3232</officetel>
                <orgNm>충청북도 괴산군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201312159.jpeg</popfile>
                <processState>보호중</processState>
                <sexCd>M</sexCd>
                <specialMark>온순하고 활발하다, 어린강아지라 주의 필요</specialMark>
                <weight>4(Kg)</weight>
            </item>
            <item>
                <age>2019(년생)</age>
                <careAddr>충청북도 증평군 도안면 입장길 239 (도안면)</careAddr>
                <careNm>괴산증평동물보호센터</careNm>
                <careTel>010-3169-1151</careTel>
                <chargeNm>이제훈</chargeNm>
                <colorCd>갈색</colorCd>
                <desertionNo>443446201900422</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201312791_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>괴산군 칠성면 외사리 146-1</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20200103</noticeEdt>
                <noticeNo>충북-괴산-2019-00313</noticeNo>
                <noticeSdt>20191220</noticeSdt>
                <officetel>043-830-3232</officetel>
                <orgNm>충청북도 괴산군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201312791.jpeg</popfile>
                <processState>보호중</processState>
                <sexCd>F</sexCd>
                <specialMark>온순하다, 어린강아지로 주의 요망</specialMark>
                <weight>4(Kg)</weight>
            </item>
            <item>
                <age>2019(년생)</age>
                <careAddr>충청북도 증평군 도안면 입장길 239 (도안면)</careAddr>
                <careNm>괴산증평동물보호센터</careNm>
                <careTel>010-3169-1151</careTel>
                <chargeNm>이제훈</chargeNm>
                <colorCd>흰색</colorCd>
                <desertionNo>443446201900421</desertionNo>
                <filename>http://www.animal.go.kr/files/shelter/2019/12/201912201312399_s.jpg</filename>
                <happenDt>20191212</happenDt>
                <happenPlace>괴산군 칠성면 외사리 146-1</happenPlace>
                <kindCd>[개] 믹스견</kindCd>
                <neuterYn>N</neuterYn>
                <noticeEdt>20200103</noticeEdt>
                <noticeNo>충북-괴산-2019-00312</noticeNo>
                <noticeSdt>20191220</noticeSdt>
                <officetel>043-830-3232</officetel>
                <orgNm>충청북도 괴산군</orgNm>
                <popfile>http://www.animal.go.kr/files/shelter/2019/12/201912201312399.jpeg</popfile>
                <processState>보호중</processState>
                <sexCd>M</sexCd>
                <specialMark>온순하고, 어린강아지</specialMark>
                <weight>4(Kg)</weight>
            </item>
        </items>
        <numOfRows>10</numOfRows>
        <pageNo>1</pageNo>
        <totalCount>62</totalCount>
    </body>
</response>
`
    const json = await xmlToJson(openapi)

    console.log(json)

    expect(json.header).toBeDefined()
    expect(json.body).toBeDefined()
    expect(typeof json.body.numOfRows === 'number').toBeTruthy()
    expect(typeof json.body.pageNo === 'number').toBeTruthy()
    expect(typeof json.body.totalCount === 'number').toBeTruthy()
    expect(json.body.items).toHaveLength(json.body.numOfRows)
  })
})
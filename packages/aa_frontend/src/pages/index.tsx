import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import {graphql} from '../lib/graphql'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'

export const HomePage: NextPage<Props> = props => {
  const [data, setData] = useState<AbandonedAnimal[]>([])

  useEffect(() => {
    graphql(/* language=graphql */ `
      query {
        aa(first: 2) {
          edges {
            node {
              id
              age
              careAddr
              careNm
              careTel
              colorCd
              desertionNo
              filename
              happenDt
              happenPlace
              kindCd
              neuterYn
              noticeComment
              noticeNo
              noticeSdt
              noticeEdt
              officetel
              orgNm
              popfile
              processState
              sexCd
              specialMark
              weight
            }
          }
        }
      }`)
      .then(data => data.aa.edges.map(e => e.node))
      .then(setData)
  }, [])

  return (
    <div className="pa3">
      /
      <div className="mv3">
        {data.map(d => {
          return (
            <div className="flex flex-column justify-start lh-copy outline pa3 mv3" key={d.desertionNo!}>
              <span className="hover-bg-light-gray">유기번호: {d.desertionNo}</span>
              <span className="hover-bg-light-gray">나이: {d.age}</span>
              <span className="hover-bg-light-gray">보호소 주소: {d.careAddr}</span>
              <span className="hover-bg-light-gray">보호소 이름: {d.careNm}</span>
              <span className="hover-bg-light-gray">보호소 전화번호: {d.careTel}</span>
              <span className="hover-bg-light-gray">색: {d.colorCd}</span>
              <span className="hover-bg-light-gray">접수일: {d.happenDt}</span>
              <span className="hover-bg-light-gray">발견장소: {d.happenPlace}</span>
              <span className="hover-bg-light-gray">종: {d.kindCd}</span>
              <span className="hover-bg-light-gray">중성화 수술 상태: {d.neuterYn}</span>
              <span className="hover-bg-light-gray">특이사항: {d.noticeComment}</span>
              <span className="hover-bg-light-gray">공고번호: {d.noticeNo}</span>
              <span className="hover-bg-light-gray">공고 시작일: {d.noticeSdt}</span>
              <span className="hover-bg-light-gray">공고 종료일: {d.noticeEdt}</span>
              <span className="hover-bg-light-gray">공고 종료일: {d.noticeEdt}</span>
              <span className="hover-bg-light-gray">담당자 연락처: {d.officetel}</span>
              <span className="hover-bg-light-gray">관할기관: {d.orgNm}</span>
              <span className="hover-bg-light-gray">사진: <img src={d.filename!}/><img src={d.popfile!}/></span>
              <span className="hover-bg-light-gray">입양 상태: {d.processState}</span>
              <span className="hover-bg-light-gray">성별: {d.sexCd}</span>
              <span className="hover-bg-light-gray">특징: {d.specialMark}</span>
              <span className="hover-bg-light-gray">체중: {d.weight}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage

type Props = {}
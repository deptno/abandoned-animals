import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import {graphql} from '../lib/graphql'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'
import {last} from 'ramda'

export const HomePage: NextPage<Props> = props => {
  const [data, setData] = useState<{ node: AbandonedAnimal, cursor?: string }[]>([])
  const [cursor, setCursor] = useState<string>()
  const handleMoreButton = () => {
    getAA({
      first: 1,
      after: cursor,
    })
      .then(response => [...data, ...response.aa.edges])
      .then(setData)
  }

  useEffect(() => {
    getAA({first: 5})
      .then(data => data.aa.edges)
      .then(setData)
  }, [])
  useEffect(() => {
    const lastItem = last(data)
    if (lastItem) {
      if (lastItem.cursor) {
        setCursor(lastItem.cursor)
      }
    }
  }, [data])

  return (
    <div className="mt3">
      <div className="ph3">/</div>
      <div className="pa3">
        {data.map(({node: d}) => {
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
      <div className="h3"/>
      <footer className="w-100 fixed bottom-0 flex justify-center items-center h3 bg-white bt b--blue bw1">
        {cursor &&
        <a className="pointer db" onClick={handleMoreButton}>더 가져오기({cursor})</a>
        }
      </footer>
    </div>
  )
}

export default HomePage

const getAA = (args?: { first?, after? }) => graphql(
  /* language=graphql */ `
    query ($first: Int!, $after: String) {
      aa(first: $first, after: $after) {
        edges {
          cursor
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
    }`,
  args,
)
type Props = {}
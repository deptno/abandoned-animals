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
      first: 7,
      after: cursor,
    })
      .then(response => [...data, ...response.aa.edges])
      .then(setData)
  }

  useEffect(() => {
    getAA({first: 7})
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
      <div className="">
        {data.map(({node: d}) => {
          return (
            <div
              className="relative flex flex-column justify-start lh-copy outline mv3 w-100 white-70 overflow-scroll vh-100 bg-light-yellow justify-center"
              key={d.desertionNo!}
            >
              <img className="absolute h6 o-90 w-100" src={d.popfile!}/>
              <p className="absolute tr relative flex flex-column ph2 right-0 top-0">
                <span className="bg-black-10">유기번호: {d.desertionNo}</span>
                <span className="bg-black-10">나이: {d.age}</span>
                <span className="bg-black-10">접수일: {d.happenDt}</span>
                <span className="bg-black-10">발견장소: {d.happenPlace}</span>
                <span className="bg-black-10">종: {d.kindCd}</span>
                <span className="bg-black-10">중성화 수술 상태: {d.neuterYn}</span>
                <span className="bg-black-10">공고번호: {d.noticeNo}</span>
                <span className="bg-black-10">공고 종료일: {d.noticeEdt}</span>
                <span className="bg-black-10">입양 상태: {d.processState}</span>
                <span className="bg-black-10">성별: {d.sexCd}</span>
                <span className="bg-black-10">체중: {d.weight}</span>
                <span className="bg-black-10">특징: {d.specialMark}</span>
                <span className="bg-black-10">특이사항: {d.noticeComment}</span>
              </p>
            </div>
          )
        })}
      </div>
      <div className="h3"/>
      <footer className="w-100 fixed bottom-0 flex justify-center items-center h3 bg-white bt b--blue bw1">
        {cursor &&
        <a className="pointer db flex flex-column items-center" onClick={handleMoreButton}>
          <span className="dib">더 가져오기</span>
          <span className="dn dib-ns">({cursor})</span>
        </a>
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
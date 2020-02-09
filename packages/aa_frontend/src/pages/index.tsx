import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import {graphql} from '../lib/graphql'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'
import {last} from 'ramda'
import {Animal} from '../Component/Animal'
import {Header} from '../Component/Header'
import {NextSeo} from 'next-seo'
import {seo} from '../constant'

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
    <div className="page ml-auto mr-auto">
      <NextSeo {...seo} />
      <style jsx>
        {/* language=css */ `
            .page {
                max-width: 976px;
            }
        `}
      </style>
      <Header />
      <div className="pa2">
        <div className="flex flex-column">
          {data.map(d => <Animal key={d.node.desertionNo} {...d.node}/>)}
        </div>
        <div className="h3"/>
        <footer className="w-100 bottom-0 flex justify-center items-center h3 bg-white bt b--blue bw1">
          {cursor &&
          <a className="pointer db flex flex-column items-center" onClick={handleMoreButton}>
            <span className="tc">더 가져오기</span>
          </a>
          }
        </footer>
      </div>
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
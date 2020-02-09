import React from 'react'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'
import {format, parse} from 'date-fns'
import {InfoRow} from './InfoRow'

export const AdoptionInfo: React.FunctionComponent<AbandonedAnimal> = props => {
  return (
    <div className="relative flex flex-column ph2 right-0 top-0 h4 f7">
      <style jsx>{/*language=css*/ `
        div {
          min-height: 160px;
        }
      `}</style>
      <InfoRow name="유기번호" value={props.desertionNo} />
      <InfoRow name="중성화" value={props.neuterYn} />
      <InfoRow name="공고번호" value={props.noticeNo} />
      <InfoRow name="공고 종료일" value={format(parse(props.noticeEdt, 'yyyyMMdd', new Date()), 'yyyy/MM/dd')} />
      <InfoRow name="입양 상태" value={props.processState} />
      <InfoRow name="보호소" value={props.careNm} />
      <InfoRow name="연락처" value={props.careTel} />
      <pre className="ws-normal bw2 bl b--red pl1">
        {props.noticeComment}
      </pre>
      <a
        className="link bg-gold black ph2 pv1 pointer f6 tc"
        href={`http://www.animal.go.kr/portal_rnl/abandonment/public_view.jsp?desertion_no=${props.desertionNo}`}
        target="_blank"
      >
        동물 보호 센터에서 확인
      </a>
    </div>
  )
}
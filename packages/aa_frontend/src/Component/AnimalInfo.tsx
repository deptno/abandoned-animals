import React, {FunctionComponent} from 'react'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'
import {format, parse} from 'date-fns'
import {InfoRow} from './InfoRow'

export const AnimalInfo: FunctionComponent<AbandonedAnimal> = props => {
  return (
    <div className="relative flex flex-column ph2 right-0 top-0 h4 f7">
      <InfoRow name="접수일" value={format(parse(props.happenDt, 'yyyyMMdd', new Date()), 'yyyy/MM/dd')} />
      <InfoRow name="발견장소" value={props.happenPlace} />
      <InfoRow name="나이" value={props.age} />
      <InfoRow name="종" value={props.kindCd} />
      <InfoRow name="성별" value={props.sexCd} />
      <InfoRow name="체중" value={props.weight} />
      <pre className="ws-normal bw2 bl b--red pl1">
        {props.specialMark}
      </pre>
    </div>
  )
}
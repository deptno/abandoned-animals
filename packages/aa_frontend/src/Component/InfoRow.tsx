import React, {FunctionComponent} from 'react'

export const InfoRow: FunctionComponent<Props> = props => {
  return (
    <div className="flex">
      <style jsx>{/*language=css*/ `
        div:first-child {
          min-width: 70px;
        }
      `}</style>
      <div className="w3">{props.name}</div>
      <div className="w-auto">{props.value}</div>
    </div>
  )
}

type Props = {
  name: string
  value: string | number
}
import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import {graphql} from '../lib/graphql'

export const HomePage: NextPage<Props> = props => {
  const [data, setData] = useState('loading')

  useEffect(() => {
    graphql(/* language=graphql */ `
      query {
        production
      }`)
      .then(data => 'response ' + JSON.stringify(data, null, 2))
      .then(setData)
  }, [])

  return (
    <div>
      HomePage
      <div>
        요청
        <pre>
{ /* language=graphql */
`
query {
  production
}
`}
        </pre>
      </div>
      <div>
        응답
        <pre dangerouslySetInnerHTML={{__html: data}}/>
      </div>
    </div>
  )
}

export default HomePage

type Props = {}
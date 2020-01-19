import fetch from 'isomorphic-unfetch'
import {const_graphql_url} from '../constant'

export const graphql = (query: string, variables?: any) => {
  return fetch(
    const_graphql_url,
    {
      method: 'post',
      headers: {
        authorization: 'test token',
      },
      body: JSON.stringify({query, variables}),
    })
    .then(response => response.json())
    .then(response => response.data)
    .catch(alert)
}

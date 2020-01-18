import fetch from 'isomorphic-unfetch'

export const graphql = (query: string, variables?: any) => {
  return fetch(
    '/api/graphql',
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

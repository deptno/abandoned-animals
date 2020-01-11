import fetch from 'isomorphic-unfetch'

export const graphql = (query: string, variable?: any) => {
  return fetch(
    '/api/graphql',
    {
      method: 'post',
      headers: {
        authorization: 'test token',
      },
      body: JSON.stringify({query, variable}),
    })
    .then(response => response.json())
    .then(response => response.data)
    .catch(alert)
}

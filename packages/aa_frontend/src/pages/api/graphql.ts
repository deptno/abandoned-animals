import {NextApiRequest, NextApiResponse} from 'next'
import fetch from 'node-fetch'
import {pick} from 'ramda'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('body', req.body, typeof req.body)

  fetch(
    'http://localhost:4000',
    {
      headers: {
        ...pick(['user-agent', 'authorization'], req.headers),
        'content-type': 'application/json; charset=UTF-8',
      },
      method: 'post',
      body: req.body,
    },
  )
    .then(response => response.text())
    .then(response => {
      res
        .status(200)
        .send(response)
    })
    .catch(e => {
      console.error(e)

      res
        .status(500)
        .send(e.message)
    })
}

import {ScheduledHandler} from 'aws-lambda'
import {AbandonedAnimalsDataSource} from '@deptno/aa_data_source'
import {const_open_api_key} from '../src/constant'
import {addDays, format} from 'date-fns'
import {parseAbandonedAnimals} from '@deptno/aa_parser'

export const handler: ScheduledHandler = async event => {
  const today = new Date()
  const yesterday = addDays(today, -1)
  const startDate = format(yesterday, 'yyyyMMdd')
  const endDate = format(today, 'yyyyMMdd')

  console.log(`fetch ${startDate} ~ ${endDate}`)

  const aas = await ds.getAbandonedAnimals({
    startDate,
    endDate,
    page: 1,
    limit: 9999,
  })
    .then(parseAbandonedAnimals)
    .then(data => {
      if (data.header.code !== '00') {
        console.error('error', data.header)

        throw new Error(data.header.msg)
      }

      console.log(`${data.body.items}/${data.body.totalCount}`)
      console.log(data.body.items)
    })
}

const ds = new AbandonedAnimalsDataSource(const_open_api_key)


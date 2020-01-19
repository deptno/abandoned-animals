import {addDays, format} from 'date-fns'
import {AbandonedAnimal, parseAbandonedAnimals} from '@deptno/aa_parser'
import {ds} from '../lib/ds'
import {complement, compose, filter, ifElse, isEmpty, map, pathOr, tap, then} from 'ramda'
import {put} from '../dynamodb/put'
import {Raw} from '@deptno/aa_data_source/dist/entity'
import {getRegisteredAnimals} from '../dynamodb/getRegisteredAnimals'

export const getAbandonedAnimals = async () => {
  const today = new Date()
  const yesterday = addDays(today, -1)
  const startDate = format(yesterday, 'yyyyMMdd')
  const endDate = format(today, 'yyyyMMdd')
  const page = 1
  const limit = 9999

  console.log(`fetch ${startDate} ~ ${endDate}`)

  const registeredAnimals: string[] = await getRegisteredAnimals({startDate, endDate})

  console.log(`registered animals ${registeredAnimals.length}`)


  return ds.getAbandonedAnimals({startDate, endDate, page, limit})
    .then(parseAbandonedAnimals)
    .then(
      compose(
        ifElse(
          complement(isEmpty),
          compose(
            then(wcu => console.log({wcu})),
            put
          ),
          _ => console.info('데이터 없음'),
        ),
        map<AbandonedAnimal, Raw>((t) => new Raw(t)),
        filter(a => registeredAnimals.includes(a.desertionNo)),
        pathOr<AbandonedAnimal[]>([], ['body', 'items']),
        tap(log),
      ),
    )
}

const log = (data): void => {
  if (data.header.code === '00') {
    console.info(`${data.body.items.length}(${data.body.numOfRows})/${data.body.totalCount}`)
  } else {
    // todo: 알림 필요
    console.error('header', data.header)
  }
}

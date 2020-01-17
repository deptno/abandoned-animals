import {addDays, format} from 'date-fns'
import {parseAbandonedAnimals} from '@deptno/aa_parser'
import {ds} from '../lib/ds'
import {complement, compose, ifElse, isEmpty, map, pathOr, tap} from 'ramda'
import {Raw} from '../dynamodb/entity/raw'
import {AbandonedAnimal} from '@deptno/aa_parser'
import {put} from '../dynamodb/put'

export const getAbandonedAnimals = () => {
  console.log(2)
  const today = new Date()
  const yesterday = addDays(today, -1)
  const startDate = format(yesterday, 'yyyyMMdd')
  const endDate = format(today, 'yyyyMMdd')
  const page = 1
  const limit = 9999

  console.log(`fetch ${startDate} ~ ${endDate}`)

  return ds.getAbandonedAnimals({startDate, endDate, page, limit})
    .then(tap(console.log))
    .then(parseAbandonedAnimals)
    .then(
      compose(
        ifElse(
          complement(isEmpty),
          put,
          _ => console.info('데이터 없음')
        ),
        // todo: get > filter -> put 을 통해 wcu 를 낮추는게 가치가 있는지 추후 검토
        map(t => new Raw(t)),
        pathOr<AbandonedAnimal[]>([], ['body', 'items']),
        tap(log),
        tap(() => console.log('tap')),
      ),
    )
}

const log = (data): void => {
  if (data.header.code === '00') {
    console.info(`${data.body.items}/${data.body.totalCount}`)
  } else {
    // todo: 알림 필요
    console.error('header', data.header)
  }
}

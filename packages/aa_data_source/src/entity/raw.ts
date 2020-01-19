import {AADocument, AADocumentRkEnum} from './interface'
import {DynamoDbKey, Gzip, util} from '@deptno/dynamodb'
import {addDays, format} from 'date-fns'
import {const_ttl_days} from '@deptno/aa_datalake/src/constant'
import {AbandonedAnimal} from '@deptno/aa_parser'

export class Raw implements AADocument {
  static key: DynamoDbKey<{ rk: AADocumentRkEnum, createdAt: Date|string }> =
    util.createKey(
      ['rk', 'createdAt'], {
        rk(t) {
          return t as AADocumentRkEnum.raw
        },
        createdAt(t) {
          return new Date(t)
        },
      },
    )
  hk
  rk
  ttl
  createdAt
  t: string
  z: Gzip<AbandonedAnimal>

  constructor(data: AbandonedAnimal) {
    const now = new Date()

    this.hk = data.desertionNo
    this.rk = AADocumentRkEnum.raw
    this.ttl = util.ttl(addDays(Date.now(), const_ttl_days))
    this.z = util.gzip(data)
    this.createdAt = now.toISOString()
    this.t = Raw.key.stringify({
      rk: this.rk,
      createdAt: format(now, 'yyyyMMdd')
    })
  }
}
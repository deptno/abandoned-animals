import {AADocument, AADocumentRkEnum} from './interface'
import {DynamoDbKey, Gzip, util} from '@deptno/dynamodb'
import {addDays} from 'date-fns'
import {AbandonedAnimal} from '@deptno/aa_parser'
import {format} from 'date-fns'

export class Raw implements AADocument {
  static key: { [key: string]: DynamoDbKey<{ rk: AADocumentRkEnum, createdAt: Date | string }> } = {
    t: util.createKey(
      ['rk', 'createdAt'], {
        rk: (t) => t as AADocumentRkEnum.raw,
        createdAt: (t) => new Date(t),
      },
    ),
  }
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
    this.ttl = util.ttl(addDays(new Date(data.noticeEdt), 1))
    this.z = util.gzip(data)
    this.createdAt = now.toISOString()
    this.t = Raw.key.t.stringify({
      rk: this.rk,
      createdAt: format(now, 'yyyy-MM-dd\'T\'HH:mmxx'),
    })
  }
}
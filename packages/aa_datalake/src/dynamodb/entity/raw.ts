import {AADocument, AADocumentRkEnum} from './interface'
import {AbandonedAnimal} from '@deptno/aa_parser'
import {Gzip, util} from '@deptno/dynamodb'
import {addDays} from 'date-fns'
import {const_ttl_days} from '../../constant'

export class Raw implements AADocument {
  hk
  rk
  ttl
  z: Gzip<AbandonedAnimal>

  constructor(data: AbandonedAnimal) {
    this.hk = data.desertionNo
    this.rk = AADocumentRkEnum.raw
    this.ttl = util.ttl(addDays(Date.now(), const_ttl_days))
    this.z = util.gzip(data)
  }
}
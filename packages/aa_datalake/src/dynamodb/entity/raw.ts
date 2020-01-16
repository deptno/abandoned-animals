import {AADocument, AADocumentRkEnum} from './interface'
import {AbandonedAnimal} from '@deptno/aa_parser'
import {Gzip, util} from '@deptno/dynamodb'

export class Raw implements AADocument {
  hk
  rk = AADocumentRkEnum.raw
  z: Gzip<AbandonedAnimal>

  constructor(data: AbandonedAnimal) {
    this.hk = data.desertionNo
    this.z = util.gzip(data)
  }
}
import {AbandonedAnimal} from '@deptno/aa_parser'
import {TTL} from '@deptno/dynamodb'

export interface AADocument {
  hk: AbandonedAnimal['desertionNo']
  rk: AADocumentRkEnum
  createdAt: string
  ttl: TTL
}
export enum AADocumentRkEnum {
  raw = 'raw'
}
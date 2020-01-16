import {AbandonedAnimal} from '@deptno/aa_parser'

export interface AADocument {
  hk: AbandonedAnimal['desertionNo']
  rk: AADocumentRkEnum
}
export enum AADocumentRkEnum {
  raw = 'raw'
}
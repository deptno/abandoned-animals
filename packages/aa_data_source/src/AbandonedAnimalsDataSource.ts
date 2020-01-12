import {DataSource} from 'apollo-datasource'
import {getAbandonedAnimals} from './api'
import {species} from './parameter'
import {Species} from './type'

export class AbandonedAnimalsDataSource extends DataSource {
  #key: string

  constructor(key: string) {
    super()

    this.#key = key
  }

  getAbandonedAnimals(
    input: {
      startDate: string
      endDate: string
      species?: Species
      kind?: string
      shelter?: string
      state?: string
      neutralization?: boolean
      si?: string
      gu?: string
      page: number
      limit: number
    },
  ) {
    return getAbandonedAnimals({
      ServiceKey: this.#key,
      bgnde: input.startDate,
      endde: input.endDate,
      upkind: species(input.species),
      kind: input.kind || '',
      upr_cd: input.si || '',
      org_cd: input.gu || '',
      care_reg_no: input.shelter || '',
      state: input.state || 'notice',
      neuter_yn: input.neutralization ? 'y' : 'n',
      pageNo: input.page.toString(),
      numOfRows: input.limit.toString(),
    })
  }
}
import {DataSource} from 'apollo-datasource'
import {getAbandonedAnimals} from './api'
import {species} from './parameter'
import {Species} from './type'

export class AbandonedAnimalsDataSource extends DataSource {
  constructor(private key: string) {
    super()
  }

  getAbandonedAnimals(
    input: {
      startDate: string
      endDate: string
      species?: Species
      kind?: string
      shelter?: string
      state?: string
      neutralization?: 'yes'|'no'|'unknown'
      si?: string
      gu?: string
      page: number
      limit: number
    },
  ) {

    const params = {
      ServiceKey: this.key,
      bgnde: input.startDate,
      endde: input.endDate,
      upkind: species(input.species),
      kind: input.kind || '',
      upr_cd: input.si || '',
      org_cd: input.gu || '',
      care_reg_no: input.shelter || '',
      state: input.state || 'notice',
      neuter_yn: input.neutralization ?? '',
      pageNo: input.page.toString(),
      numOfRows: input.limit.toString(),
    }
    console.debug('params:', params)

    return getAbandonedAnimals(params)
  }
}
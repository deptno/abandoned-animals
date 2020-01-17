import {ScheduledHandler} from 'aws-lambda'
import {getAbandonedAnimals} from '../src/dataSource/getAbandonedAnimals'

export const handler: ScheduledHandler = async event => {
  return await getAbandonedAnimals()
}



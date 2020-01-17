import {ScheduledHandler} from 'aws-lambda'
import {getAbandonedAnimals} from '../src/dataSource/getAbandonedAnimals'

export const handler: ScheduledHandler = async event => {
  console.log(1)
  return await getAbandonedAnimals()
    .catch(e => {
      console.log(3)
      console.error(e)
    })
}



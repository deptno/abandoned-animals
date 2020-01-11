import {const_is_production} from '../../../../constant'

export const production = (args, context) => {
  console.log('home')
  return const_is_production
}
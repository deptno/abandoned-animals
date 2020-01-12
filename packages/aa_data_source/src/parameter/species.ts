import {Species} from '../type'

export const species = (species?: Species): string => {
  if (species) {
    if (species === 'dog') {
      return '417000'
    }
    if (species === 'cat') {
      return '422400'
    }
    if (species === 'etc') {
      return '429900'
    }
  }

  return ''
}
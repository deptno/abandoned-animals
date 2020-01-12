import {AbandonedAnimalsDataSource} from './AbandonedAnimalsDataSource'

describe('AbandonedAnimalsDataSource', () => {
  const ds = new AbandonedAnimalsDataSource('')

  it('getAbandonedAnimals()', function () {
    return ds.getAbandonedAnimals({
      startDate: '20200101',
      endDate: '20200102',
      species: 'dog',
      page: 1,
      limit: 10,
    })
      .then(response => {
        console.log(response)
      })
      .catch(console.error)
  })
})

import {AbandonedAnimalsDataSource} from './AbandonedAnimalsDataSource'

describe('AbandonedAnimalsDataSource', () => {
  const ds = new AbandonedAnimalsDataSource(process.env.AA_OPENAPI_KEY!)

  it('getAbandonedAnimals()', function () {
    return ds.getAbandonedAnimals({
      startDate: '20200114',
      endDate: '20200115',
      species: 'dog',
      page: 1,
      limit: 9999,
    })
      .then(response => {
        console.log(response)
      })
      .catch(console.error)
  })
})

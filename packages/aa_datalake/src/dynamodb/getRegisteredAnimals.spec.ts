import {getRegisteredAnimals} from './getRegisteredAnimals'

describe.skip('real', function () {
  describe('dynamodb', function () {
    it('getRegisteredAnimals()', function () {
      return getRegisteredAnimals({
        startDate: '20200119',
        endDate: '20200119',
      })
        .then(response => {
          console.log(response.length)
          console.log(response[0])
        })
    })
  })
})

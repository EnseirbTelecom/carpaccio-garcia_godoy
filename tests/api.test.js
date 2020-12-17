const request = require('supertest')
const app = require('../api')

describe('test get /id', () => {
  it('GET /id', async () => {
    const { body } = await request(app).get('/id')
    expect(body).toEqual(
      {
        id: 'it340-Garcia_Godoy'
      }
    )
  })
})

const express = require('express')
const request = require('supertest')
const api = require('./api')

const app = express()
app.use('/id', api)

describe('test get /id', () => {
  it('GET /id', async () => {
    const { body } = await request(app).get('/id')
    expect(body).toEqual([
      {
        id: 'it340-Garcia_Godoy'
      }
    ])
    expect('Content-Type', /json/)
    expect(200)
  })
})

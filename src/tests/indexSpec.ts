import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Testing the endpoints', () => {
  it('Api endpoint is responding', async () => {
    const response = await request.get('/api')
    expect(response.status).toBe(200)
  })
  it('images endpoint is responding', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(200)
  })
})

describe('Testing the images processing module', () => {
  it('Expecting to return empty body when the file name does not exist', async () => {
    const response = await request.get('/api/images?width=100&height=100&filename=img5')
    expect(response.body).toEqual({})
  })
  it('Expecting to return data when the file name exists', async () => {
    const response = await request.get('/api/images?width=100&height=100&filename=img3')
    expect(response.body).not.toEqual({})
  })
})

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

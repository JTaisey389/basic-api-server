'use strict'

const { server } = require('../src/server.js');
const supertest = require('supertest');
const createRequest = supertest(server);

describe('**MY API SERVER**', () => {
  it('should create a new place in the database', async () => {
    const response = await createRequest.post('/places').send({ type: 'Seattle'})
    expect(response.status).toBe(201);
    expect(response.body.body.record.type).toEqual('Seattle');
    })
  
  it('should retrieve a new place in the database', async () => {
    const response = await createRequest.post('/places/1');
    expect(response.status).toBe(200);
  })

  it('should retrieve all places the db', async () => {
    const response = await createRequest.get('/places')
    expect(response.status).toBe(200);
  })

  it('should create a new snack in the database', async () => {
    const response = await createRequest.post('/snacks').send({ type: 'Ice Cream'})
    expect(response.status).toBe(201);
    expect(response.body.body.record.type).toEqual('Ice Cream');
  })

  it('should retrieve a new snack in the database', async () => {
    const response = await createRequest.post('/snacks/1');
    expect(response.status).toBe(200);
  });

  it('should retrieve all snacks in the db', async () => {
    const response = await createRequest.get('/snacks')
    expect(response.status).toBe(200);
  })
  it('handles invalid requests', async () => {
    const response = await createRequest.get('/no-food');
    expect(response.status).toEqual(404);
  })

  it('handles invalid methods', async () => {
    const response = await createRequest.patch('/no-thing');
    expect(response.status).toEqual(404);
  })

})

  


'use strict'

const { server } = require('../src/server.js');
const supertest = require('supertest');
const createRequest = supertest(server);

describe('------MY API SERVER-------', () => {
  it('should create a new food in the database', async () => {
    const response = await createRequest.post('/food').send({ type: 'Apple Fritter'})
    expect(response.status).toBe(201);
    console.log('/food')
    expect(response.body.record.type).toEqual('Apple Friter');
    })
  
  it('should retrieve a new place in the database', async () => {
    const response = await createRequest.post('/food/1');
    expect(response.status).toBe(200);
  })

  it('should retrieve all places the db', async () => {
    const response = await createRequest.get('/food')
    expect(response.status).toBe(200);
  })

  it('should create a new snack in the database', async () => {
    const response = await createRequest.post('/clothes').send({ type: 'Polo Shirt'})
    expect(response.status).toBe(201);
    expect(response.body.body.record.type).toEqual('Polo Shirt');
  })

  it('should retrieve a new snack in the database', async () => {
    const response = await createRequest.post('/clothes/1');
    expect(response.status).toBe(200);
  });

  it('should retrieve all clothes in the db', async () => {
    const response = await createRequest.get('/clothes')
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

  


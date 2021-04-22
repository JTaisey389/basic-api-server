'use strict'

const { server } = require('../src/server.js');
const supertest = require('supertest');
const createRequest = supertest(server);

describe('**MY PLACES SERVER**', () => {
  it('should create a new item in the db', async () => {
    const response = await createRequest.post('/places').send({ places: 'Seattle'})
      expect(response.status).toBe(201);
      expect(results.body.record.name).toEqual('Seattle');
    });
    
    it('should retreive an item in the db', async () => {
    const response = await createRequest.get('/places/1')
    expect(response.status).toBe(200);
  });  
  it('should retrieve all items from the db', async () => {
    const response = await createRequest.get('/places')
    expect(response.status).toBe(200);
  });
  it('should update an item in the db', async () => {
    const response = await createRequest.get('/places/1');
    expect(response.status).toBe(200);
  })
  it('should remove an item from the db', async () => {
    const response = await createRequest.get('/places/1');
    expect(response.status).toBe(200);
  })
});

describe('**MY SNACKS SERVER**', () => {
  it('should create a new item in the db', async () => {
    const response = await createRequest.post('/snacks').send({ places: 'Ice Cream'})
      expect(response.status).toBe(201);
      expect(results.body.record.name).toEqual('Ice Cream');
    });
    
    it('should retreive an item in the db', async () => {
    const response = await createRequest.get('/snacks/1')
    expect(response.status).toBe(200);
  });  
  it('should retrieve all items from the db', async () => {
    const response = await createRequest.get('/snacks')
    expect(response.status).toBe(200);
  });
  it('should update an item in the db', async () => {
    const response = await createRequest.get('/snacks/1');
    expect(response.status).toBe(200);
  })
  it('should remove an item from the db', async () => {
    const response = await createRequest.get('/snacks/1');
    expect(response.status).toBe(200);
  })
});
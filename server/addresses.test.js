const request = require('supertest-as-promised');
const chai = require('chai');
const expect = chai.expect

const db = require('APP/db');
const Address = require('APP/db/models/address');
const app = require('./start')

describe('/api/addresses', () => {
  let testAddress
  let unbuilt = {
      name: "Jimmy DiColandrea",
      phone: "347-255-6257",
      businessName: "Jimmy's Jellybeans",
      streetNum: "60-24",
      streetName: "Woodbine St.",
      apartment: "3",
      city: "Ridgewood",
      state: "NY",
      zip: "11385"
    }

  before('create test address', () => {
    testAddress = Address.create(unbuilt)
    return testAddress
  })

  // pending until admin auth testing works
  xdescribe('admin users', () => {
    it('are allowed to get all addresses', () => {
      return request(app)
      .get(`/api/addresses`)
      .expect(200)
      .then(res => res.body)
      .then(addresses => {
        expect(addresses).to.be.an('array')
        expect(addresses[0]).to.include.keys('city', 'state')
      })
    })
  })

  describe('non admins', () => {
    it('GET / is disallowed', () => {
      return request(app)
      .get(`/api/addresses`)
      .expect(401)
    })

    it('POST', () => {
      return request(app)
      .post(`/api/addresses`)
      .send(unbuilt)
      .expect(201)
      .then(createdAddress => {
        expect(createdAddress.body.state).to.be.equal('NY')
      })
    })
  })

  // pending until logged in auth testing works
  xdescribe('logged-in users', () => {

    it('GET /:id', () => {
      return request(app)
      .get(`/api/addresses/1`)
      .expect(200)
      .then(returnedAddress => {
        expect(returnedAddress.body.user_id).to.be.equal(null)
      })
    })

    it('PUT /:id', () => {
      return request(app)
      .put(`/api/addresses/1`)
      .send({
        state: 'PA',
      })
      .expect(200)
      .then(updatedAddress => {
        expect(updatedAddress.body.state).to.be.equal('PA')
      })
    })

    it('DELETE /:id', () => {
      return request(app)
      .delete(`/api/addresses/1`)
      .expect(200)
    })
  })



})
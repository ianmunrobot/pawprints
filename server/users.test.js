const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

describe('/api/users', () => {
  describe('when not logged in', () => {
    it('GET / fails 401 (Unauthorized)', () => request(app)
      .get(`/api/users/`)
      .expect(401)
    )

    it('GET /:id fails 401 (Unauthorized)', () => request(app)
      .get(`/api/users/1`)
      .expect(401)
    )

    it('POST creates a user', () => request(app)
      .post('/api/users')
      .send({
        email: 'beth@secrets.org',
        password: '12345'
      })
      .expect(201)
    )

    it('POST redirects to the user it just made', () => request(app)
      .post('/api/users')
      .send({
        email: 'eve@interloper.com',
        password: '23456',
      })
      .redirects(1)
      .then(res => expect(res.body).to.contain({
        email: 'eve@interloper.com'
      }))
    )

    it('PUT /:id fails 401 (Unauthorized)', () => request(app)
      .put(`/api/users/1`)
      .expect(401)
    )

    it('DELETE /:id fails 401 (Unauthorized)', () => request(app)
      .delete(`/api/users/1`)
      .expect(401)
    )

    it('GET /:id/orders fails 401 (Unauthorized)', () => request(app)
      .get(`/api/users/1/orders`)
      .expect(401)
    )
  })

  describe('when logged in as a user', () => {

  })

  describe('when logged in as an admin', () => {
    beforeEach('set up admin spies', () => {

    })
  })
})

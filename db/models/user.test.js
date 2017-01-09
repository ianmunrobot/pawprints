'use strict'

const db = require('APP/db')
const User = require('./user')
const {expect} = require('chai')

describe('User', () => {
  before('wait for the db', () => db.didSync);
  let exampleUser;
  beforeEach('', () => {
    exampleUser = {
      firstName: 'eric',
      lastName: 'rainville',
      email: 'e@r.com',
      password: 'ok'
    }
  });
  afterEach('destroy the created user', () => User.destroy({
    where: {
      email: 'e@r.com'
    }
  }));

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () => User.create(exampleUser)
      .then(user => user.authenticate('ok'))
      .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () => User.create(exampleUser)
      .then(user => user.authenticate('not ok'))
      .then(result => expect(result).to.be.false))
  });

  describe('isAdmin', () => {
    it('defaults to false', () => User.create(exampleUser)
      .then(user => expect(user.isAdmin).to.be.false)
    )
  });


  describe('validations', () => {
    it('require email', () => {
      exampleUser.email = '';
      const user = User.build(exampleUser)
      return user.validate()
        .then(err => {
          // console.log('AAAAAAAAAAAA', err)
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.equal('email') //TODO: fix the hacky array access
          expect(err.errors[0].type).to.equal('Validation error')
        })

    });
    it('require first name', () => {
      exampleUser.firstName = '';
      const user = User.build(exampleUser)
      return user.validate()
        .then(err => {
          // console.log('AAAAAAAAAAAA', err)
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.equal('firstName') //TODO: fix the hacky array access
          expect(err.errors[0].type).to.equal('Validation error')
        })

    });
    it('require last name', () => {
      exampleUser.lastName = '';
      const user = User.build(exampleUser)
      return user.validate()
        .then(err => {
          // console.log('AAAAAAAAAAAA', err)
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.equal('lastName') //TODO: fix the hacky array access
          expect(err.errors[0].type).to.equal('Validation error')
        })

    });
  });
})

'use strict'

const db = require('APP/db')
const Address = require('./address')
const {expect} = require('chai')

describe('Address', () => {
  before('wait for the db sync', () => db.didSync)

  describe('validates', () => {
    var address;
    beforeEach(()=> {
      address = Address.build({
        name: "Jimmy DiColandrea",
        phone: "347-255-6257",
        businessName: "Jimmy's Jellybeans",
        streetNum: "60-24",
        streetName: "Woodbine St.",
        apartment: "3",
        city: "Ridgewood",
        state: "NY",
        zip: "11385"
      })
    })

    it('requires a name and/or a business', () =>{
      address.name = null
      address.businessName = null
      address.save()
        .then(result=> {
          expect(result).to.be.null
        })
        .catch(err=>{
          expect(err.message).to.be.equal('notNull Violation: category cannot be null')
        })
        .then(() => {
          address.name = "Jimmy"
          return address.save()
        })
        .then(result => {
          expect(result.businessName).to.be.null
          expect(result.name).to.equal('Jimmy')
        })
        .then(() => {
          address.name = null
          address.businessName = "Jimmy's JuJubeans"
          return address.save()
        })
        .then(result => {
          expect(result.name).to.be.null
          expect(result.businessName).to.equal("Jimmy's JuJubeans")
        })
    })

    it('requires a valid phone number', () =>{

    })

    it('requires a streetNum', () =>{

    })

    it('requires a streetName', () =>{

    })

    it('requires a city', () =>{

    })

    it('requires a valid state', () =>{

    })

    it('requires a valid zip', () =>{

    })

  })
})

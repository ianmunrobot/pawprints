import { expect } from 'chai'

import { receiveOrders, receiveSingleOrder } from './orders'

describe('Orders actions', () => {

  const testOrders = [
    {
      status: 'shipped',
      shippingCost: 10.50,
      isGift: true,
      tax: 7.56,
    },
    {
      status: 'delivered',
      shippingCost: 30.54,
      isGift: false,
      tax: 10.43,
    },
  ]

  const testAddresses = [
    {
      name: "Jimmy DiColandrea",
      phone: "347-255-6257",
      businessName: "Jimmy's Jellybeans",
      streetNum: "60-24",
      streetName: "Woodbine St.",
      apartment: "3",
      city: "Ridgewood",
      state: "NY",
      zip: "11385"
    },
    {
      name: "tiara laviolette",
      phone: "123-456-7890",
      streetNum: "14",
      streetName: "Lancaster St",
      city: "Worcester",
      state: "MA",
      zip: '01610'
    }
  ]

  it('receives a single order', () => {
    expect(receiveSingleOrder(testOrders[0])).to.be.deep.equal({
      type: 'RECEIVE_SINGLE_ORDER',
      order: testOrders[0],
    })
  })

  it('receives all orders', () => {
    expect(receiveOrders(testOrders)).to.be.deep.equal({
      type: 'RECEIVE_ORDERS',
      orders: testOrders,
    })
  })

  it('adds a product to order', () => {
    expect(addProductToOrder(testOrders[0])).to.be.deep.equal({
      type: 'ADD_PRODUCT_TO_ORDER',
      addedProduct: testOrders[0]
    })
  })

  it('changes the Quantity of a product in an order', () =>{
    expect(changeQuantityOfProduct(testOrders.length)).to.be.deep.equal({
      type: 'CHANGE_QUANTITY_OF_PRODUCT',
      quantity: testOrders.length
    })
  })

  it('adds a shipping address', () => {
    expect(addShippingAddress(address)).to.be.deep.equal({
      type: 'ADD_SHIPPING_ADDRESS',
      newShippingAddress: address
    })
  })

  it('allows for a change of a shipping address', () => {
    expect(changeShippingAddress(address)).to.be.deep.equal({
      type: 'CHANGE_SHIPPING_ADDRESS',
      changedShippingAddress: address
    })
  })

  it('adds a billing address', () => {
    expect(addBillingAddress(address)).to.be.deep.equal({
      type: 'ADD_BILLING_ADDRESS',
      newBillingAddress: address
    })
  })

  it('allows for a change of a billing address', () => {
    expect(changeBillingAddress(address)).to.be.deep.equal({
      type: 'CHANGE_BILLING_ADDRESS',
      changedBillingAddress: address
    })
  })

  it('removes all products from cart at checkout', () => {
    expect(checkout(complete)).to.be.deep.equal({
      type: 'CHECKOUT',
      cart: []
    })
  })

})

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

  it('adds a product to order')
  it('changes the Quantity of a product in an order')
  it('adds a shipping address')
  it('allows for a change of a shipping address')
  it('adds a billing address')
  it('allows for a change of a billing address')
  it('removes all products from cart at checkout')

})

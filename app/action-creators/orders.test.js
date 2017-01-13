import { expect } from 'chai'

import { receiveOrders, receiveOrder } from './orders'

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
    console.log(testOrders[0]);
    expect(receiveOrder(testOrders[0])).to.be.deep.equal({
      type: 'RECEIVE_ORDER',
      order: testOrders[0],
    })
  })

  it('receives all orders', () => {
    expect(receiveOrders(testOrders)).to.be.deep.equal({
      type: 'RECEIVE_ORDERS',
      orders: testOrders,
    })
  })

})

import chai, {expect} from 'chai'
import ordersReducer from './orders.jsx'
import { createStore } from 'redux'
import { RECEIVE_ORDER, RECEIVE_ORDERS } from '../constants.jsx'

describe('orders reducer', () => {
  let testingStore;

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

  beforeEach('Create testing store from reducer', () => {
    testingStore = createStore(ordersReducer)
  })

  it('has proper initial state', () => {
    expect(testingStore.getState()).to.be.deep.equal([])
  })
  it('receives a single order', () => {
    testingStore.dispatch({
      type: 'RECEIVE_ORDER',
      order: testOrders[0]
    });
    let newState = testOrders[0].getState();
    expect(newState).to.be.deep.equal('shipped')
  })
  it('receives all orders', () => {
    testingStore.dispatch({
      type: RECEIVE_ORDERS,
      orders: testOrders
    });
    let newState = testingStore.getState();
    console.log('STATUSSSSS', testOrders[0].status);
    console.log('NNNNNEEEEEWWWWSTATE',newState);
    expect(newState[0].status).to.be.deep.equal('shipped')
  })

})

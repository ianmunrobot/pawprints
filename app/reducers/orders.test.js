import {expect} from 'chai'
import ordersReducer from './orders.jsx'
import { createStore } from 'redux'

describe('orders reducer', () => {

  let testStore;
  let testOrders;
  beforeEach('Create testing store from reducer', () => {
    testStore = createStore(ordersReducer)
    testOrders = [
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
  })

  it('has proper initial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      allOrders: [],
      selectedOrder: {}
    })
  })

  it('receives a single order', () => {
    console.log('SINGLE TEST ORDER', testOrders[0]);
    let testAction = {
      type: 'RECEIVE_SINGLE_ORDER',
      order: testOrders[0]
    }
    console.log('SINGLE TEST ACTION ORDER', testAction.order);
    testStore.dispatch(testAction)
    console.log('SINGLE TEST STORE', testStore);
    let newState = testStore.getState();
    console.log('SINGLE NEWSTATE', newState);
    expect(newState.selectedOrder).to.be.deep.equal(testAction.order)
  })

  it('receives all orders', () => {
    let testAction = {
      type: 'RECEIVE_ORDERS',
      orders: testOrders
    }
    console.log('ALL TEST ACTION', testAction);
    testStore.dispatch(testAction);
    console.log('ALL TEST STORE', testStore);
    let newState = testStore.getState();
    console.log('ALL NEWSTATE', newState);
    expect(newState.allOrders).to.be.deep.equal(testAction.orders)
  })

})

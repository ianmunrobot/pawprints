import { expect } from 'chai'
import { createStore } from 'redux'

import productReducer from './products'

describe('Product reducer', () => {
  let testStore
  beforeEach('create testing store', () => {
    testStore = createStore(productReducer)
  })

  it('has the proper initial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      allProducts: [],
      selectedProduct: {},
    })
  })

  it('sets a selected product', () => {
    let testAction = {
      type: 'RECEIVE_PRODUCT',
      product: {
        title: 'smurf skull',
        price: 1000000000,
        description: 'very rare because of its fictional nature',
        inventory: 1,
      }
    }
    testStore.dispatch(testAction)
    let newState = testStore.getState()
    expect(newState.selectedProduct).to.be.deep.equal(testAction.product)
  })

  it('sets a list of all products', () => {
    let testAction = {
      type: 'RECEIVE_PRODUCTS',
      products: [
        {
          title: 'smurf skull',
          price: 1000000000,
          description: 'very rare because of its fictional nature',
          inventory: 1,
        },
        {
          title: 'cool product',
          price: 0.25,
          description: 'a bargatin at any price',
          inventory: 25,
        },
      ]
    }
    testStore.dispatch(testAction)
    let newState = testStore.getState()
    expect(newState.allProducts).to.be.deep.equal(testAction.products)
  })
})
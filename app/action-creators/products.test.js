import { expect } from 'chai'
import { receiveProducts, receiveProduct } from './products'

describe('Products actions', () => {
  const testProducts = [
    {
      title: 'bullshit',
      price: 3.50,
      description: 'stinky',
      inventory: 9
    },
    {
      title: 'smurf skull',
      price: 1000000000,
      description: 'very rare because of its fictional nature',
      inventory: 1
    }
  ]

  it('receives a single product', () => {
    expect(receiveProduct(testProducts[0])).to.be.deep.equal({
      type: 'RECEIVE_PRODUCT',
      product: testProducts[0]
    })
  })

  it('receives all products', () => {
    expect(receiveProducts(testProducts)).to.be.deep.equal({
      type: 'RECEIVE_PRODUCTS',
      product: testProducts
    })
  })
})

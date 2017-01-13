import React, { Component } from 'react'

export default class SingleProduct extends Component {
  componentDidMount() {

  }

  render () {
    return (
      <div>
        <h1>{this.props.product.title}</h1>
        <div>
          <img src={this.props.product.imgUrl} />
          <h2>Price:</h2>
          <h3>{this.props.product.price}</h3>
          <h2>Size:</h2>
          <h3>{this.props.product.size}</h3>
          <h2>Description:</h2>
          <p>{this.props.product.description}</p>
          <h2>Inventory</h2>
          <p>{this.props.product.inventory}</p>          
        </div>
      </div>
    )
  }
}

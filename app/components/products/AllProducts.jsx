import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AllProducts extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        {
          this.props.products.map(product => {
            return (
              <ul key={product.id}>
                <li>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Orders extends Component {
  componentDidMount() {

  }

  render () {
    return (
      <div>
        {
          this.props.orders.map(order => {
            return (
              <ul key={order.id}>
                <li>
                  <p>{order}</p>
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

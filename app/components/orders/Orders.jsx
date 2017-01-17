import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Orders extends Component {
// TODO: needs more touching up, but I can't test for anything on this machine
  render () {
    return (
      <div>
        {
          this.props.orders.map(order => {
            return (
              <ul key={order.id}>
                <li>
                  <h3>Status: {order.status}</h3>
                  <h3>Shipping Cost: {order.shippingCost}</h3>
                  <h3>Shipping Type: {order.shippingType}</h3>
                  <h3>Date receiveed: {order.date}</h3>
                  <h3>Is a Gift? {
                    order.isGift
                      ? <p>Yes</p>
                      : <p>No</p>
                    }
                  </h3>
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

import React from 'react';

export function AddressComponent({user, updateBillingAddress, updateShippingAddress}) {

  const onBillingAddressSubmit = function(evt) {
    evt.preventDefault()
    let newAddress = {
      name: evt.target.name.value,
      phone: evt.target.phone.value,
      apartment: evt.target.apartment.value,
      streetNum: evt.target.streetNum.value,
      streetName: evt.target.streetName.value,
      apartment: evt.target.apartment.value,
      city: evt.target.city.value,
      state: evt.target.state.value,
      zip: evt.target.zip.value
    }

    updateBillingAddress(newAddress); document.getElementById("addressInfo").reset();
  }

  const onShippingAddressSubmit = function(evt) {
    evt.preventDefault()
    let newAddress = {
      name: evt.target.name.value,
      phone: evt.target.phone.value,
      apartment: evt.target.apartment.value,
      streetNum: evt.target.streetNum.value,
      streetName: evt.target.streetName.value,
      apartment: evt.target.apartment.value,
      city: evt.target.city.value,
      state: evt.target.state.value,
      zip: evt.target.zip.value
    }

    updateShippingAddress(newAddress); document.getElementById("addressInfo").reset();
  }

  return (
    <div>
      <div className="account account-left">
        <div className="container">
          <div className="account-bottom">
            <div className="col-md-6 account-left">
              <div className="account-top heading">
                <h3>My Billing Information</h3>
                <div className="address">
                  <span>Name: { user.billingAddress.name }</span>
                </div>
                <div className="address">
                  <span>Phone: { user.billingAddress.phone }</span>
                </div>
                <div className="address">
                  <span>Business Name: { user.billingAddress.businessName }</span>
                </div>
                <div className="address">
                  <span>Street Number: { user.billingAddress.streetNum }</span>
                </div>
                <div className="address">
                  <span>Street Name: { user.billingAddress.streetName }</span>
                </div>
                <div className="address">
                  <span>Apartment: { user.billingAddress.apartment }</span>
                </div>
                <div className="address">
                  <span>City: { user.billingAddress.city }</span>
                </div>
                <div className="address">
                  <span>State: { user.billingAddress.state }</span>
                </div>
                <div className="address">
                  <span>Zip Code: { user.billingAddress.zip }</span>
                </div>
              </div>
              <div className="account-top heading">
                <h3>My Shipping Information</h3>
                <div className="address">
                  <span>Name: { user.shippingAddress.name }</span>
                </div>
                <div className="address">
                  <span>Phone: { user.shippingAddress.phone }</span>
                </div>
                <div className="address">
                  <span>Business Name: { user.shippingAddress.businessName }</span>
                </div>
                <div className="address">
                  <span>Street Number: { user.shippingAddress.streetNum }</span>
                </div>
                <div className="address">
                  <span>Street Name: { user.shippingAddress.streetName }</span>
                </div>
                <div className="address">
                  <span>Apartment: { user.shippingAddress.apartment }</span>
                </div>
                <div className="address">
                  <span>City: { user.shippingAddress.city }</span>
                </div>
                <div className="address">
                  <span>State: { user.shippingAddress.state }</span>
                </div>
                <div className="address">
                  <span>Zip Code: { user.shippingAddress.zip }</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 account-left">
              <form id="addressInfo" onSubmit={ onBillingAddressSubmit } onReset={ onShippingAddressSubmit }>
                <div className="account-top heading">
                  <h3>Address</h3>
                </div>
                <div className="address">
                  <span>Name</span>
                  <input type="text" name="name" />
                </div>
                <div className="address">
                  <span>Phone</span>
                  <input type="text" name="phone" />
                </div>
                <div className="address">
                  <span>Business Name</span>
                  <input type="text" name="businessName" />
                </div>
                <div className="address">
                  <span>Street Number</span>
                  <input type="text" name="streetNum" />
                </div>
                <div className="address">
                  <span>Street Name</span>
                  <input type="text" name="streetName" />
                </div>
                <div className="address">
                  <span>Apartment (optional)</span>
                  <input type="text" name="apartment" />
                </div>
                <div className="address">
                  <span>City</span>
                  <input type="text" name="city" />
                </div>
                <div className="address">
                  <span>State (use abbrev.)</span>
                  <input type="text" name="state" />
                </div>
                <div className="address">
                  <span>Zip Code</span>
                  <input type="text" name="zip" />
                </div>
                <div className="address new">
                  <input type="submit" value="submit as billing" />
                </div>
                <div className="address new">
                  <input type="reset" value="submit as shipping" />
                </div>
              </form>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}

//---------------Login Container --------------------//
import { updateBillingAddress as billingThunk, updateShippingAddress as shippingThunk } from 'APP/app/action-creators/address'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    updateBillingAddress: function(addressObj) {
      dispatch(billingThunk(addressObj))
    },
    updateShippingAddress: function(addressObj) {
      dispatch(shippingThunk(addressObj))
    }
  }
}

export default connect(({auth}) => ({
  user: auth
}), mapDispatchToProps)(AddressComponent)

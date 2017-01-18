import React, { Component } from 'react'
import {connect} from 'react-redux';



class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 1,
      title: '',
      message: '',
    }
    this.titleChange = this.titleChange.bind(this)
    this.ratingChange = this.ratingChange.bind(this)
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  titleChange(evt) {
    const value = evt.target.value
    this.setState({
      title: value
    })
  }

  ratingChange(evt) {
    const value = evt.target.value
    this.setState({
      rating: value
    })
  }

  textChange(evt) {
    const value = evt.target.value
    this.setState({
      message: value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    // add review
    console.log(evt.target)
    let newReview = Object.assign({}, this.state, {
      user_id: this.props.userId,
      product_id: this.props.productId,
    })
    this.props.addReviewToProduct(this.props.productId, newReview)
    this.setState({
      rating: 1,
      title: '',
      message: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
          <label htmlFor="reviewTitle">Title </label>
          <input type="text" className="form-control" id="reviewTitle" value={this.state.title} onChange={this.titleChange} />
          <label htmlFor="stars"> Stars</label>
          <input type="number" name="rating" onChange={this.ratingChange} className="form-control input-number" min="1" max="5" value={this.state.rating} />
        </div>
        <div className="form-group">
          <label htmlFor="reviewText">Text</label>
          <textarea className="form-control" id="reviewText" value={this.state.message} onChange={this.textChange} />
        </div>
        <button type="submit" className="btn btn-submit">Submit Review</button>
      </form>
    )

  }
}

import { addReviewToProduct } from 'APP/app/action-creators/products'

const mapStateToProps = function (state, ownProps) {
  return {
    productId: ownProps.productId,
    userId: state.auth.id,
    product: state.selectedProduct
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    addReviewToProduct: (productId, body) => {
      dispatch(addReviewToProduct(productId, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
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
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.titleChange} />
        </label>
        <label>
          Stars:
          <input type="number" name="rating" onChange={this.ratingChange} className="form-control input-number" min="1" max="5" value={this.state.rating}/>
        </label>
        <label>
          Review:
          <input type="textarea" value={this.state.message} onChange={this.textChange} />
        </label>
        <input type="submit" value="Submit Review" />
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
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import { fetchProduct } from '../../action-creators';

const mapStateToProps = function (state) {
  return {

  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadProduct: function() {
      const productId = ownProps.params.productId;
      const thunk = fetchProduct(productId)
      dispatch(thunk)
    }
  }
}

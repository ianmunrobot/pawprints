import { connect } from 'react-redux';
import { fetchProducts } from '../../action-creators/products'
import AllProducts from './AllProducts'

const mapStateToProps = function(state) {
  return {
    products: state.productsReducer
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadProducts: function() {
      const thunk = fetchProducts();
      dispatch(thunk)
    }
  }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AllProductsContainer = componentCreator(AllProducts);
export default AllProductsContainer;

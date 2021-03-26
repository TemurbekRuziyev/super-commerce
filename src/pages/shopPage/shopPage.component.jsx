import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { Route } from 'react-router';

import { fetchProductsStart } from '../../redux/shop/shop.actions';
import Collections from '../../components/collections/collections.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { selectProductIs } from '../../redux/shop/shop.selector';
import { ShopPageContainer } from './shopPage.styles';
const CollectionWithSpinner = withSpinner(Collections);

const ShopPage = ({ fetchProductsStart, match, isLoading }) => {
  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);

  return (
    <ShopPageContainer>
      <h1>ShopPage</h1>
      <CollectionWithSpinner isLoading={isLoading} />
      {/* <Route exact path={`${match.path}/:categoryId}`} component={Collections}/> */}
    </ShopPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectProductIs,
});

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
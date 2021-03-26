import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchProductsStart, getLikeList } from '../../redux/shop/shop.actions';
import Collections from '../../components/collections/collections.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { selectProductIs } from '../../redux/shop/shop.selector';
import { ShopPageContainer } from './shopPage.styles';
import { selectLikeList } from '../../redux/like/like.selector';
const CollectionWithSpinner = withSpinner(Collections);

const ShopPage = ({ fetchProductsStart, likes, getLikeList, isLoading }) => {
  useEffect(() => {
    getLikeList(likes);
    fetchProductsStart();
  }, [fetchProductsStart, getLikeList, likes]);

  return (
    <ShopPageContainer>
      <h1>Select your dream stuff and add to cart so as to buy</h1>
      <CollectionWithSpinner isLoading={isLoading} />
    </ShopPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectProductIs,
  likes: selectLikeList,
});

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
  getLikeList: likes => dispatch(getLikeList(likes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

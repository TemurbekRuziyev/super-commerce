import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProductList } from '../../redux/shop/shop.selector';
import { CollectionsContainer } from './collections.styles';
import CollectionItem from '../collection-item/collection-item.component';

const Collections = ({ products }) => {
  return (
    <CollectionsContainer>
      {products.length > 0 ? (
        products.map(item => <CollectionItem item={item} key={item.id} />)
      ) : (
        <h1>Please check your internet connection</h1>
      )}
    </CollectionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProductList,
});

export default connect(mapStateToProps)(Collections);

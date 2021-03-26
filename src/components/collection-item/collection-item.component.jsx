import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { scaledProduct } from '../../redux/scaled-product/scaled-product.selector';
import { zoomInProduct } from '../../redux/scaled-product/scaled-product.actions';
import { addAndRemoveFavorite } from '../../redux/like/like.actions';
import ScaledProduct from '../scaled-product/scaled-product.component';
import { selectLikeList } from '../../redux/like/like.selector';
import { addToCart } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionItemLikeContainer,
  CollectionItemLike,
  ItemImageContainer,
  CollectionInfoContainer,
  CollectionItemName,
  CollectionItemPrice,
  CustomButtonContainer,
  ItemImage,
  CustomButtonStyle,
} from './collection-item.styles';

const CollectionItem = ({
  item,
  zoomInProduct,
  scaledProduct,
  addAndRemoveFavorite,
  likes,
  addToCart,
}) => {
  const { image, title, price, liked, description } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemLikeContainer>
        <CollectionItemLike
          liked={liked}
          onClick={() => addAndRemoveFavorite(item, likes)}
        />
      </CollectionItemLikeContainer>
      <ItemImageContainer>
        <ItemImage
          src={image.replace('fakestoreapi', 'fakestoreapi.herokuapp')}
          alt={description}
        />
      </ItemImageContainer>
      <CustomButtonContainer>
        <CustomButtonStyle onClick={() => addToCart(item)}>
          Add To Cart
        </CustomButtonStyle>
        <CustomButtonStyle
          onClick={() => {
            zoomInProduct(item);
          }}
        >
          View scaler
        </CustomButtonStyle>
      </CustomButtonContainer>
      <CollectionInfoContainer>
        <CollectionItemName>{title}</CollectionItemName>
        <CollectionItemPrice>$ {price}</CollectionItemPrice>
      </CollectionInfoContainer>

      {scaledProduct ? <ScaledProduct /> : null}
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  scaledProduct: scaledProduct,
  likes: selectLikeList,
});

const mapDispatchToProps = dispatch => ({
  zoomInProduct: product => dispatch(zoomInProduct(product)),
  addAndRemoveFavorite: item => dispatch(addAndRemoveFavorite(item)),
  addToCart: item => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);

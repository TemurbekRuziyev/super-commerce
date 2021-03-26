import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { zoomOutProduct } from '../../redux/scaled-product/scaled-product.actions';
import { scaledProduct } from '../../redux/scaled-product/scaled-product.selector';

import {
  ScaledProductContainer,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ExitIcon,
  ProductTitle,
  ProductImageContainer,
} from './scaled-product.styles';

const ScaledProduct = ({ scaledProduct, zoomOutProduct }) => {
  return (
    <ScaledProductContainer>
      <ProductContainer>
        <ProductImageContainer>
          <ProductImage
            src={scaledProduct.image.replace(
              'fakestoreapi',
              'fakestoreapi.herokuapp'
            )}
            alt={scaledProduct.title}
          />
        </ProductImageContainer>
        <ExitIcon onClick={() => zoomOutProduct()} />
        <ProductInfo>
          <ProductTitle>{scaledProduct.title}</ProductTitle>
          <ProductPrice>$ {scaledProduct.price}</ProductPrice>
        </ProductInfo>
      </ProductContainer>
    </ScaledProductContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  scaledProduct: scaledProduct,
});

const mapDispatchToProps = dispatch => ({
  zoomOutProduct: () => dispatch(zoomOutProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaledProduct);

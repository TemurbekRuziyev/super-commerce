import ScaledProductTypes from './scaled-product.types';

export const zoomInProduct = product => ({
  type: ScaledProductTypes.SCALED_PRODUCT,
  payload: product,
});

export const zoomOutProduct = () => ({
  type: ScaledProductTypes.REMOVE_SCALED_PRODUCT,
});

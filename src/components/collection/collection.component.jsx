import React from 'react';

import { CollectionContainer, CollectionLike } from './collection.styles';
import CustomButton from '../custom-button/custom-button.component';

const Collection = () => (
  <CollectionContainer>
    <CollectionLike />
    <CustomButton>Add To Cart</CustomButton>
  </CollectionContainer>
);

export default Collection;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLikeList } from '../../redux/like/like.selector';
import CollectionItem from '../collection-item/collection-item.component';
import { HomePageCollectionContainer } from './homepage-collection.styles';

const HomePageCollection = ({ likes }) => {
  return (
    <HomePageCollectionContainer likes={likes}>
      {likes.map(item => (
        <CollectionItem item={item} key={item.id} />
      ))}
    </HomePageCollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  likes: selectLikeList,
});

export default connect(mapStateToProps)(HomePageCollection);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoryList } from '../../redux/homepage-collection/homepage-collection.selector';
import { fetchCategoryStart } from '../../redux/homepage-collection/homepage-collection.actions';

import { HomePageContainer } from './homePage.styles';

const HomePage = ({ fetchCategory, category }) => {
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  console.log(category);
  return (
    <HomePageContainer>
      <h1>HomePage</h1>
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  category: selectCategoryList,
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: () => dispatch(fetchCategoryStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoryList } from '../../redux/homepage-collection/homepage-collection.selector';
import { fetchCategoryStart } from '../../redux/homepage-collection/homepage-collection.actions';

import {
  HomePageContainer,
  HomePageHeading,
  RecommendedProducts,
  BestSellerProducts,
  BuyScheduleContainer,
  ScheduleContainer,
  HomePageText
} from './homePage.styles';
import Schedule from '../../components/schedule/schedule.component';

const HomePage = ({ fetchCategory, category }) => {
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  console.log(category);

  return (
    <HomePageContainer>
      <HomePageHeading>
        Good afternoon Temurbek, <br /> Welcome to Super-Commerce Website
      </HomePageHeading>
      <RecommendedProducts>
        <HomePageText>
          Recommended Products
        </HomePageText>
      </RecommendedProducts>
      <BestSellerProducts>
        <HomePageText>
          Top Saled Products
        </HomePageText>
      </BestSellerProducts>
      <BuyScheduleContainer>
        <HomePageText>
          Let's create your schedule purchasing
        </HomePageText>
        <ScheduleContainer>
          <Schedule />
        </ScheduleContainer>
      </BuyScheduleContainer>
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

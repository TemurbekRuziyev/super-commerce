import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePageCollection from '../../components/homepage-collection/homepage-collection.component';
import { fetchProductsStart } from '../../redux/shop/shop.actions';
import Schedule from '../../components/schedule/schedule.component';
import {
  HomePageContainer,
  HomePageHeading,
  FavoriteProducts,
  BuyScheduleContainer,
  ScheduleContainer,
  HomePageText,
  FavoriteProductsList,
} from './homePage.styles';
import { selectProductIs } from '../../redux/shop/shop.selector';
import { selectColorStyle } from '../../redux/global-styles/global-styles.selector';

const HomePage = ({ fetchProductsStart, isLoading, bgColor }) => {
  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);

  return (
    <HomePageContainer>
      <HomePageHeading bgColor={bgColor}>
        Good afternoon Temurbek, <br /> Welcome to Super-Commerce Website
      </HomePageHeading>
      <BuyScheduleContainer>
        <HomePageText>Let's create your schedule purchasing</HomePageText>
        <ScheduleContainer>
          <Schedule />
        </ScheduleContainer>
      </BuyScheduleContainer>
      <FavoriteProducts>
        <HomePageText>Favorite Products</HomePageText>
        <FavoriteProductsList>
          <HomePageCollection isLoading={isLoading} />
        </FavoriteProductsList>
      </FavoriteProducts>
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectProductIs,
  bgColor: selectColorStyle,
});

const mapDispatchToProps = dispatch => ({
  fetchProductsStart: () => dispatch(fetchProductsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

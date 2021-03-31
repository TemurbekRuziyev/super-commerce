import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ContentContainer, AppContainer, GlobalStyles } from './App.styles';

import SidebarMenu from './components/sidebar-menu/sidebar-menu.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import { selectColorStyle } from './redux/global-styles/global-styles.selector';

const HomePage = lazy(() => import('./pages/homePage/homePage.component'));
const ShopPage = lazy(() => import('./pages/shopPage/shopPage.component'));
const ProfilePage = lazy(() => import('./pages/profilePage/profile.component'));
const CheckoutPage = lazy(() =>
  import('./pages/checkoutPage/checkout.component')
);

const App = ({ bgColor }) => {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter>
        <SidebarMenu />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <ContentContainer bgColor={bgColor}>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/user' component={ProfilePage} />
                <Route exact path='/checkout' component={CheckoutPage} />
              </ContentContainer>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  bgColor: selectColorStyle,
});

// const mapStateToProps = state => ({
//   bgColor: state.styles.color,
// });

export default connect(mapStateToProps)(App);

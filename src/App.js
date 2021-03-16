import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppContainer, GlobalStyles } from './App.styles';

import SidebarMenu from './components/sidebar-menu/sidebar-menu.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homePage/homePage.component'));
const ShopPage = lazy(() => import('./pages/shopPage/shopPage.component'));
const ProfilePage = lazy(() => import('./pages/profilePage/profile.component'));
const CheckoutPage = lazy(() =>
  import('./pages/checkoutPage/checkout.component')
);

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter>
        <SidebarMenu />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/user' component={ProfilePage} />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;

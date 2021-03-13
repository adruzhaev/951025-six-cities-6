import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../../pages/main-page';
import AuthPage from '../../pages/auth-page';
import FavouritePlacesPage from '../../pages/favourite-places-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import browserHistory from '../../browser-history.js';
import {AppRoutes} from '../../const';

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoutes.MAIN} exact>
          <MainPage />
        </Route>
        <Route path={AppRoutes.LOGIN} exact>
          <AuthPage />
        </Route>
        <PrivateRoute
          path={AppRoutes.FAVORITES}
          exact
          render={() => <FavouritePlacesPage />}
        />
        <Route path={AppRoutes.OFFER} exact>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

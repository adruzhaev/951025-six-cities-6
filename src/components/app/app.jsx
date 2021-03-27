import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page';
import AuthPage from '../../pages/auth-page';
import FavouritePlacesPage from '../../pages/favourite-places-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import {AppRoutes} from '../../const';

const App = () => {

  return (
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
  );
};

export default App;

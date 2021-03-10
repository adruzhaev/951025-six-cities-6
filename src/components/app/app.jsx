import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import FavouritePlacesPage from '../favourite-places-page';
import OfferPage from '../offer-page';
import NotFoundPage from '../not-found-page';
import PrivateRoute from '../private-route';
import {reviewPropType} from '../../prop-types';
import browserHistory from '../../browser-history.js';
import {AppRoutes} from '../../const';

const App = ({reviews}) => {

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
          <OfferPage reviews={reviews}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from '../../pages/main-page';
import AuthPage from '../../pages/auth-page';
import FavouritePlacesPage from '../../pages/favourite-places-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import {AppRoutes} from '../../const';
import {getAuthorizationStatus} from '../../store/auth/selectors';

const App = ({authorizationStatus}) => {
  return (
    <Switch>
      <Route path={AppRoutes.MAIN} exact>
        <MainPage />
      </Route>
      <Route path={AppRoutes.LOGIN} exact>
        {authorizationStatus === `NO_AUTH` ? <AuthPage /> : <Redirect to={`/`}/>}
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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(App);

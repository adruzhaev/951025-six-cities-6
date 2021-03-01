import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import FavouritePlacesPage from '../favourite-places-page';
import OfferPage from '../offer-page';
import NotFoundPage from '../not-found-page';
import {reviewPropType} from '../../prop-types';

const App = ({reviews}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Route path="/favorites" exact>
          <FavouritePlacesPage />
        </Route>
        <Route path="/offer/:id" exact>
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
  cityToStay: PropTypes.string,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default App;

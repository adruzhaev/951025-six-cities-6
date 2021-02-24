import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import FavouritePlacesPage from '../favourite-places-page';
import OfferPage from '../offer-page';
import NotFoundPage from '../not-found-page';
import {offerPropTypes, reviewPropType} from '../../prop-types';

const App = ({cityToStay, offers, reviews}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage cityToStay={cityToStay} offers={offers.filter((offer) => offer.city.name === cityToStay)}/>
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Route path="/favorites" exact>
          <FavouritePlacesPage offers={offers.filter((offer) => offer.isFavorite)}/>
        </Route>
        <Route path="/offer/:id" exact>
          <OfferPage offers={offers} reviews={reviews}/>
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
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
};

export default App;

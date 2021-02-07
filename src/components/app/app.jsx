import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import FavouritePlacesPage from '../favourite-places-page';
import OfferPage from '../offer-page';
import NotFoundPage from '../not-found-page';

const App = (props) => {

  const {count} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage count={count}/>
        </Route>
        <Route path="/login" exact>
          <AuthPage />
        </Route>
        <Route path="/favorites" exact>
          <FavouritePlacesPage />
        </Route>
        <Route path="/offer/:id" exact>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired
};

export default App;

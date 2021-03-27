import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {AuthorizationStatus, CITIES, OfferStatus} from '../../const';
import {NameSpace} from '../../store/reducer';
import {offers, offerAdapted} from '../../store/offer/test-mocks';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  it(`Render 'MainPage' when user navigates to '/' url`, async () => {

    const store = mockStore({
      [NameSpace.AUTH]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {}
      },
      [NameSpace.OFFER]: {
        activeCity: CITIES[0].city,
        offers: [],
        isDataLoaded: true
      }
    });

    const history = createMemoryHistory();
    history.push(`/`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(`Cities`)).toBeInTheDocument();
    });
  });

  it(`Render 'AuthPage' when user navigates to '/login' url`, () => {
    const store = mockStore({
      [NameSpace.AUTH]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {}
      }
    });

    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'FavoritesPlacesPage' when user navigates to '/favorites' url`, async () => {
    const store = mockStore({
      [NameSpace.AUTH]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {email: `test@gmail.com`, name: `test`}
      },
      [NameSpace.OFFER]: {
        offers: [],
        isDataLoaded: true
      },
      [NameSpace.FAVORITES]: {
        offers,
        isDataLoaded: true
      }
    });

    const history = createMemoryHistory();
    history.push(`/favorites`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
    });
  });

  it(`Render 'OfferPage' when user navigates to '/offer/:id' url`, async () => {
    const store = mockStore({
      [NameSpace.AUTH]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {}
      },
      [NameSpace.OFFER]: {
        offers: [],
        offer: offerAdapted,
        offersNearby: [],
        isDataLoaded: true,
        notFoundOffer: OfferStatus.FOUND
      },
      [NameSpace.REVIEWS]: {
        reviews: [],
      }
    });

    const history = createMemoryHistory();
    history.push(`/offer/1`);

    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(`The house among olive`)).toBeInTheDocument();
      expect(screen.getByText(`Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`)).toBeInTheDocument();
    });
  });

  it(`Render 'NotFoundPage' when user navigates to '/page-not-found' url`, () => {
    const store = mockStore({
      [NameSpace.AUTH]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {}
      },
      [NameSpace.OFFER]: {
        offers: [],
        isDataLoaded: true
      }
    });

    const history = createMemoryHistory();
    history.push(`/page-not-found`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  });

});

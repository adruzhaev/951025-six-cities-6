import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Header from './header';
import {AuthorizationStatus} from '../../const';
import {NameSpace} from '../../store/reducer';

const mockStore = configureStore({});

describe(`Header should render correctly`, () => {
  it(`Header should render correctly with unathorized user`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Provider store={mockStore({
          [NameSpace.AUTH]: {
            authorizationStatus: AuthorizationStatus.NO_AUTH,
            authorizationInfo: {},
          }
        })}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it(`Header should render correctly with athorized user`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Provider store={mockStore({
          [NameSpace.AUTH]: {
            authorizationStatus: AuthorizationStatus.AUTH,
            authorizationInfo: {email: `test@gmail.com`, name: `test`},
          }
        })}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {NameSpace} from '../../store/reducer';
import CitiesList from './cities-list.jsx';
import {CITIES} from '../../const';

const mockStore = configureStore();

it(`CitiesList should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore({
        [NameSpace.OFFER]: {
          activeCity: CITIES[0].city,
        }
      })}>
        <Router history={history}>
          <CitiesList />
        </Router>
      </Provider>
  );
  expect(container).toMatchSnapshot();
});

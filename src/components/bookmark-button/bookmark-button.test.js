import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../const';
import {NameSpace} from '../../store/reducer';
import BookmarkButton from './bookmark-button';
import {offerAdapted} from '../../store/offer/test-mocks';

const mockStore = configureStore();

it(`BookmarkButton should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore({
        [NameSpace.AUTH]: {
          authorizationStatus: AuthorizationStatus.AUTH,
          authorizationInfo: {email: `test@gmail.com`, name: `test`},
        }
      })}>
        <Router history={history}>
          <BookmarkButton offer={offerAdapted} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});

import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AuthForm from './auth-form';

test(`AuthForm should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <AuthForm />
      </Router>
  );

  expect(container).toMatchSnapshot();
});

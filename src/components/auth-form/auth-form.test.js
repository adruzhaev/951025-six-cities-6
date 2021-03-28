import React from 'react';
import {render} from '@testing-library/react';
import {AuthForm} from './auth-form';

it(`AuthForm should render correctly`, () => {
  const {container} = render(
      <AuthForm />
  );
  expect(container).toMatchSnapshot();
});

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/auth/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/auth/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => {
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect),
    )
);

(async () => {
  await store.dispatch(checkAuth());

  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})();

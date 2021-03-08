import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import App from './components/app/app';
import reviews from './mocks/reviews';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus, AppRoutes} from './const';
import {checkAuth} from './store/api-actions';
import browserHistory from './browser-history';

const api = createAPI(
    () => {
      store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      browserHistory.push(AppRoutes.LOGIN);
    }
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

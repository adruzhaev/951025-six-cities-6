import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import reviews from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDom.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

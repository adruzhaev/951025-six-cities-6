import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {CITIES} from './const';

ReactDom.render(
    <App
      offers={offers}
      reviews={reviews}
      cityToStay={CITIES[3]}
    />,
    document.querySelector(`#root`)
);

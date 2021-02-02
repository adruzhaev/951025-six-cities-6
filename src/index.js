import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const PLACES_COUNT = 312;

ReactDom.render(
    <App count={PLACES_COUNT}/>,
    document.querySelector(`#root`)
);

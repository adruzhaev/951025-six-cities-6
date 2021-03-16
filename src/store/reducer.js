import {combineReducers} from 'redux';
import {reducer as auth} from './auth/reducer';
import {reducer as offer} from './offer/reducer';
import {reducer as reviews} from './reviews/reducer';

export const NameSpace = {
  AUTH: `AUTH`,
  OFFER: `OFFER`,
  REVIEWS: `REVIEWS`,
};

const reducer = combineReducers({
  [NameSpace.AUTH]: auth,
  [NameSpace.OFFER]: offer,
  [NameSpace.REVIEWS]: reviews
});

export {reducer};

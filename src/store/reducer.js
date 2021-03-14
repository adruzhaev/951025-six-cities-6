import {combineReducers} from 'redux';
import {reducer as auth} from './auth/reducer';
import {reducer as offer} from './offer/reducer';
import {reducer as reviews} from './reviews/reducer';

const reducer = combineReducers({
  auth,
  offer,
  reviews
});

export {reducer};

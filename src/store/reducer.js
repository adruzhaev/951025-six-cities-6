import {combineReducers} from 'redux';
import {reducer as authReducer} from './auth/reducer';
import {reducer as offerReducer} from './offer/reducer';
import {reducer as reviewsReducer} from './reviews/reducer';

const reducer = combineReducers({
  authReducer,
  offerReducer,
  reviewsReducer
});

export {reducer};

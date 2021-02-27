import {ActionType} from './action';
import offers from '../mocks/offers';
import {CITIES} from '../const';

const initialState = {
  activeCity: CITIES[0],
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

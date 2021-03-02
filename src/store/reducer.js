import {ActionType} from './action';
import offers from '../mocks/offers';
import {CITIES, SortingTypes} from '../const';

const initialState = {
  activeCity: CITIES[0],
  activeSorting: SortingTypes.POPULAR,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

import {ActionType} from './action';
import {CITIES, SortingTypes} from '../const';

const initialState = {
  activeCity: CITIES[0].city,
  activeSorting: SortingTypes.POPULAR,
  offers: [],
  offer: null,
  isDataLoaded: false,
  isOfferLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};

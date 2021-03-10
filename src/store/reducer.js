import {ActionType} from './action';
import {CITIES, SortingTypes, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: CITIES[0].city,
  activeSorting: SortingTypes.POPULAR,
  offers: [],
  offer: null,
  isDataLoaded: false,
  isOfferLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTHORIZATION:
      return {
        ...state,
        authorizationInfo: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

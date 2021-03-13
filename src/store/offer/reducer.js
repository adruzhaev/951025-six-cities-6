import {ActionType} from './action';
import {CITIES, SortingTypes, OfferStatus} from '../../const';

const initialState = {
  activeCity: CITIES[0].city,
  activeSorting: SortingTypes.POPULAR,
  offers: [],
  offer: null,
  isDataLoaded: false,
  notFoundOffer: OfferStatus.FOUND,
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
      };

    case ActionType.CLEAN_STATE:
      return {
        ...state,
        notFoundOffer: OfferStatus.FOUND,
        offer: null,
      };

    case ActionType.NOT_FOUND_OFFER:
      return {
        ...state,
        notFoundOffer: OfferStatus.NOT_FOUND,
      };
    default:
      return state;
  }
};

export {reducer};

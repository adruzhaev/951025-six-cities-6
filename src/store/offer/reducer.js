import {ActionType} from './action';
import {ActionType as ActionType2} from '../favorites/action';
import {CITIES, SortingTypes, OfferStatus} from '../../const';

const initialState = {
  activeCity: CITIES[0].city,
  activeSorting: SortingTypes.POPULAR,
  offers: [],
  offer: null,
  offersNearby: [],
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
    case ActionType2.ADD_FAVORITE:
    case ActionType2.REMOVE_FAVORITE:
      return {
        ...state,
        offer: (state.offer && state.offer.id) === action.payload.id ? {...state.offer, isFavorite: !state.offer.isFavorite} : state.offer,
        offers: state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            return {
              ...offer,
              isFavorite: !offer.isFavorite,
            };
          }
          return offer;
        })
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
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

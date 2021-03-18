import {ActionType} from './action';

const initialState = {
  offers: [],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_FAVORITE:
      return {
        ...state,
        offers: state.isDataLoaded ? [...state.offers, action.payload] : []
      };
    case ActionType.REMOVE_FAVORITE:
      return {
        ...state,
        offers: state.offers.filter((offer) => offer.id !== action.payload.id)
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};

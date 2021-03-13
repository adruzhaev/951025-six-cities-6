import {ActionType} from './action';

const initialState = {
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};

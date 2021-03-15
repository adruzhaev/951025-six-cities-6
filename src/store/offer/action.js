export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORTING: `sorting/change`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  NOT_FOUND_OFFER: `offer/notFound`,
  CLEAN_STATE: `offer/cleanState`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSorting = (sortingType) => ({
  type: ActionType.CHANGE_SORTING,
  payload: sortingType,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const notFoundOffer = () => ({
  type: ActionType.NOT_FOUND_OFFER,
});

export const cleanState = () => ({
  type: ActionType.CLEAN_STATE,
});

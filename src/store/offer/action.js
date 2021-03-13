export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORTING: `sorting/change`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  NOT_FOUND_OFFER: `offer/notFound`,
  CLEAN_STATE: `offer/cleanState`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sortingType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortingType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  notFoundOffer: () => ({
    type: ActionType.NOT_FOUND_OFFER,
  }),
  cleanState: () => ({
    type: ActionType.CLEAN_STATE,
  })
};

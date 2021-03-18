export const ActionType = {
  ADD_FAVORITE: `favorite/add`,
  REMOVE_FAVORITE: `favorite/remove`,
  LOAD_FAVORITES: `favorites/load`,
};

export const addFavorite = (offer) => ({
  type: ActionType.ADD_FAVORITE,
  payload: offer,
});

export const removeFavorite = (offer) => ({
  type: ActionType.REMOVE_FAVORITE,
  payload: offer,
});

export const loadFavorites = (offers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: offers,
});

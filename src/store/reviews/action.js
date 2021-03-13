export const ActionType = {
  LOAD_REVIEWS: `data/loadReviews`,
};

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })
};

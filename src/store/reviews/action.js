export const ActionType = {
  LOAD_REVIEWS: `data/loadReviews`,
};

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const ActionType = {
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
};

export const ActionCreator = {
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};

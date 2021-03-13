export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTHORIZATION: `user/authInfo`,
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setAuthorization: (info) => ({
    type: ActionType.SET_AUTHORIZATION,
    payload: info,
  }),
};

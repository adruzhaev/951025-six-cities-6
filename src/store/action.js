export const ActionType = {
  CHANGE_CITY: `city/change`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  })
};

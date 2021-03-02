export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORTING: `sorting/change`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sortingType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortingType,
  })
};

import {ActionType, addFavorite, removeFavorite, loadFavorites} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator loadFavorites returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: `favoritesTest`,
    };

    expect(loadFavorites(`favoritesTest`)).toEqual(expectedAction);
  });

  it(`Action creator addFavorite returns correct action`, () => {
    const expectedAction = {
      type: ActionType.ADD_FAVORITE,
      payload: `favoritesTest`
    };

    expect(addFavorite(`favoritesTest`)).toEqual(expectedAction);
  });

  it(`Action creator removeFavorite returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REMOVE_FAVORITE,
      payload: `favoritesTest`
    };

    expect(removeFavorite(`favoritesTest`)).toEqual(expectedAction);
  });
});

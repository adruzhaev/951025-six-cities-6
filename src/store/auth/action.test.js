import {ActionType, requireAuthorization, setAuthorization} from './action';
import {AuthorizationStatus} from '../../const';

const authorizationInfo = {
  id: 1,
  email: `test@gmail.com`,
  name: `test`,
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
  isPro: false,
};

describe(`Action creators work correctly`, () => {
  it(`Action creator requireAuthorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction);
  });

  it(`Action creator setAuthorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: authorizationInfo,
    };

    expect(setAuthorization(authorizationInfo)).toEqual(expectedAction);
  });
});

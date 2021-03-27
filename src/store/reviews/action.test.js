import {ActionType, loadReviews} from './action';

const review = {
  id: 1,
  user: {
    id: 18,
    name: `Sophie`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
    isPro: true
  },
  rating: 2,
  comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  date: `2021-03-07T08:04:28.647Z`
};

describe(`Action creator works correctly`, () => {
  it(`Action creator for loading reviews return correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: review
    };

    expect(loadReviews(review)).toEqual(expectedAction);
  });
});

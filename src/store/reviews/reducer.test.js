import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './action';
import {fetchReviewsList, sendReviewForm} from './api-actions';
import {APIRoutes} from '../../const';
import {reducer} from './reducer';

const api = createAPI(() => {});

const review = {
  "rating": 2,
  "comment": `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
};

export const reviewResponse = {
  "id": 2,
  "user": {
    "id": 11,
    "is_pro": false,
    "name": `test`,
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
  },
  "rating": 4,
  "comment": `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  "date": `2021-03-14T19:34:29.648Z`
};

const reviews = [
  {
    "id": 1,
    "user":
      {
        "id": 18,
        "isPro": true,
        "name": `Sophie`,
        "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
      },
    "rating": 2,
    "comment": `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    "date": `2021-03-07T08:04:28.647Z`
  },
  {
    "id": 2,
    "user":
    {
      "id": 15,
      "isPro": false,
      "name": `Kendall`,
      "avatarUrl": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
    },
    "rating": 4,
    "comment": `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
    "date": `2021-03-07T08:04:28.647Z`
  }
];

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({
        reviews: [],
      });
  });
});

describe(`Async operation should work correctly`, () => {
  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchReviewsList(id);
    const url = APIRoutes.REVIEWS.concat(`/`, id);

    apiMock
      .onGet(url)
      .reply(200, reviews);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: reviews,
        });
      });
  });

  it(`Should make a correct API call to send review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const sendReviewLoader = sendReviewForm({id, review});
    const url = APIRoutes.REVIEWS.concat(`/`, id);

    apiMock
      .onPost(url)
      .reply(200, [reviews, reviewResponse]);

    return sendReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [...reviews, reviewResponse],
        });
      });
  });
});

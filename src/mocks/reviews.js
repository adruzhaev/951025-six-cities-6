import {v4 as uuidv4} from 'uuid';

const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [
  {
    id: uuidv4(),
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: uuidv4(),
      isPro: false,
      name: `Max`,
    }
  }
];

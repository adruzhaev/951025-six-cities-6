export const CITIES = [
  {
    id: 1,
    city: `Paris`
  },
  {
    id: 2,
    city: `Cologne`
  },
  {
    id: 3,
    city: `Brussels`
  },
  {
    id: 4,
    city: `Amsterdam`
  },
  {
    id: 5,
    city: `Hamburg`
  },
  {
    id: 6,
    city: `Dusseldorf`
  }
];

export const RATING = [
  {
    value: 5,
    title: `perfect`,
  },
  {
    value: 4,
    title: `good`,
  },
  {
    value: 3,
    title: `not bad`,
  },
  {
    value: 2,
    title: `badly`,
  },
  {
    value: 1,
    title: `terribly`,
  },
];

export const Coordinates = {
  [CITIES[0].city]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [CITIES[1].city]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [CITIES[2].city]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [CITIES[3].city]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  [CITIES[4].city]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  [CITIES[5].city]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
};

export const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_DESCENDING: `Price: low to high`,
  PRICE_ASCENDING: `Price: high to low`,
  TOP_FIRST: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const OfferStatus = {
  FOUND: `FOUND`,
  NOT_FOUND: `NOT_FOUND`,
};

export const AppRoutes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const APIRoutes = {
  OFFERS: `/hotels`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITES: `/favorite`,
};

export const MIN_COMMENTS_CHARS = 50;
export const MAX_COMMENTS_CHARS = 300;

export const BOOK_MARK_ICON = {
  MAIN: {
    WIDTH: 18,
    HEIGHT: 19,
  },
  OFFER: {
    WIDTH: 31,
    HEIGHT: 33,
  }
};

export const BOOK_MARK_CLASSES = {
  MAIN: `place-card__`,
  OFFER: `property__`
};

export const REVIEWS_TO_SHOW = {
  MIN: 0,
  MAX: 10,
};

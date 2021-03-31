import {NameSpace} from '../reducer';

export const getReviews = (state) => state[NameSpace.REVIEWS].reviews.sort((a, b) => b.id - a.id);

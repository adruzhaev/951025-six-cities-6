export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        user: {
          ...review.user,
          avatarUrl: review.user.avatar_url,
          isPro: review.user.is_pro,
        }
      }
  );

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptOfferToClient = (item) => {
  const adaptedOffer = Object.assign(
      {},
      item,
      {
        isPremium: item.is_premium,
        isFavorite: item.is_favorite,
        previewImage: item.preview_image,
        maxAdults: item.max_adults,
        host: {
          ...item.host,
          avatarUrl: item.host.avatar_url
        }
      }
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

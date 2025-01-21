import { privateInstance } from '@apis/instance';

import { WishListResponse } from './type';

interface FetchWishlistParams {
  page: number;
  userId: number;
}

const fetchWishlist = async ({ page, userId }: FetchWishlistParams): Promise<WishListResponse> => {
  const response = await privateInstance.get<WishListResponse>('/user/wishlist', {
    params: {
      page,
      userId,
    },
  });
  return response.data;
};

export default fetchWishlist;

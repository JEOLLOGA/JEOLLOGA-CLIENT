import { privateInstance } from '@apis/instance';

import { SuccessResponse, WishlistRequest, WishlistResponse } from './type';

interface FetchWishlistParams {
  page: number;
  userId: number;
}

export const fetchWishlist = async ({
  page,
  userId,
}: FetchWishlistParams): Promise<WishlistResponse> => {
  const response = await privateInstance.get<WishlistResponse>('/user/wishlist', {
    params: {
      page,
      userId,
    },
  });
  return response.data;
};

export const addWishlist = async ({
  userId,
  templestayId,
}: WishlistRequest): Promise<SuccessResponse> => {
  const response = await privateInstance.post<SuccessResponse>('/user/templestay/liked', {
    userId,
    templestayId,
  });
  return response.data;
};

export const removeWishlist = async ({
  userId,
  templestayId,
}: WishlistRequest): Promise<SuccessResponse> => {
  const response = await privateInstance.delete<SuccessResponse>('/user/templestay/liked/delete', {
    data: {
      userId,
      templestayId,
    },
  });
  return response.data;
};

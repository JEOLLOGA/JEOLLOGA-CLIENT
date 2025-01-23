import { useMutation, useQuery } from '@tanstack/react-query';

import { addWishlist, fetchWishlist, removeWishlist } from './axios';
import { WishlistRequest, WishlistResponse, SuccessResponse } from './type';

export const useWishlistQuery = (page: number, userId: number) => {
  return useQuery<WishlistResponse>({
    queryKey: ['wishlist', userId, page],
    queryFn: () => fetchWishlist({ page, userId }),
    staleTime: 0,
  });
};

export const useAddWishlist = () => {
  return useMutation<SuccessResponse, Error, WishlistRequest>({
    mutationFn: (data: WishlistRequest) => addWishlist(data),
    onSuccess: () => {},
  });
};

export const useRemoveWishlist = () => {
  return useMutation<SuccessResponse, Error, WishlistRequest>({
    mutationFn: (data: WishlistRequest) => removeWishlist(data),
    onSuccess: () => {},
  });
};

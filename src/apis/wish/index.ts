import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addWishlist, fetchWishlist, removeWishlist } from './axios';
import { WishlistRequest, WishlistResponse, SuccessResponse } from './type';

export const useWishlistQuery = (page: number, userId: number) => {
  return useQuery<WishlistResponse>({
    queryKey: ['wishlist', page],
    queryFn: () => fetchWishlist({ page, userId }),
    staleTime: 1000 * 60 * 3,
  });
};

export const useAddWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation<SuccessResponse, Error, WishlistRequest>({
    mutationFn: (data: WishlistRequest) => addWishlist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });
};

export const useRemoveWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation<SuccessResponse, Error, WishlistRequest>({
    mutationFn: (data: WishlistRequest) => removeWishlist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });
};

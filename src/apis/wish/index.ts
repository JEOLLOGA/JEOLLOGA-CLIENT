import { useQuery } from '@tanstack/react-query';

import fetchWishlist from './axios';
import { WishListResponse } from './type';

export const useWishlistQuery = (page: number, userId: number) => {
  return useQuery<WishListResponse>({
    queryKey: ['wishlist', page],
    queryFn: () => fetchWishlist({ page, userId }),
    staleTime: 1000 * 60 * 3,
  });
};

export default useWishlistQuery;

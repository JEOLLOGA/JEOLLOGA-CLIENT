import { useQuery } from '@tanstack/react-query';

import getTempleReviews from './axios';
import { ReviewsResponse } from './type';

const useGetTempleReviews = (templestayId: string | null, page: number | null) => {
  const { data, isLoading, isError } = useQuery<ReviewsResponse>({
    queryKey: ['reviews', templestayId],
    queryFn: () => getTempleReviews(templestayId, page),
  });

  return { data, isLoading, isError };
};

export default useGetTempleReviews;

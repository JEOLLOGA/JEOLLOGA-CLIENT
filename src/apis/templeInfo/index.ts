import { useQuery } from '@tanstack/react-query';

import { getTempleImages, getTempleReviews, getTempleDetails } from './axios';
import { TempleDetail, ReviewsResponse, TemplestayImgsResponse } from './type';

export const useGetTempleDetails = (templestayId: string, userId: string) => {
  const { data, isLoading, isError } = useQuery<TempleDetail>({
    queryKey: ['detailPage', templestayId],
    queryFn: () => getTempleDetails(templestayId, userId),
  });

  return { data, isLoading, isError };
};

export const useGetTempleReviews = (templestayId: string, page: number) => {
  const { data, isLoading, isError } = useQuery<ReviewsResponse>({
    queryKey: ['reviews', templestayId, page],
    queryFn: () => getTempleReviews(templestayId, page),
  });

  return { data, isLoading, isError };
};

export const useGetTempleImages = (templestayId: string) => {
  const { data, isLoading, isError } = useQuery<TemplestayImgsResponse>({
    queryKey: ['images', templestayId],
    queryFn: () => getTempleImages(templestayId),
  });

  return { data, isLoading, isError };
};

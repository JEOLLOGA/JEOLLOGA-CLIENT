import { queryOptions } from '@tanstack/react-query';

import { getTempleImages, getTempleReviews } from './axios';
import { TemplestayImgsResponse, ReviewsResponse } from './type';

export const templeImagesQueryOptions = (templestayId: string) =>
  queryOptions<TemplestayImgsResponse>({
    queryKey: ['images', templestayId],
    queryFn: () => getTempleImages(templestayId),
  });

export const templeReviewsQueryOptions = (templestayId: string, page: number) =>
  queryOptions<ReviewsResponse>({
    queryKey: ['reviews', templestayId, page],
    queryFn: () => getTempleReviews(templestayId, page),
  });

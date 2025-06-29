import { queryOptions } from '@tanstack/react-query';

import { getTempleImages, getTempleReviews, getTempleDetails } from './axios';
import { TemplestayImgsResponse, ReviewsResponse, TempleDetail } from './type';

export const templeDetailQueryOptions = (templestayId: string, userId?: string) =>
  queryOptions<TempleDetail>({
    queryKey: ['detailPage', templestayId, userId],
    queryFn: () => getTempleDetails(templestayId, userId),
  });

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

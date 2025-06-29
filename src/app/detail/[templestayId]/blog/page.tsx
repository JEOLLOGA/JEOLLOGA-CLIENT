import { templeReviewsQueryOptions } from '@apis/templeInfo/prefetch';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import BlogReviewClient from './BlogReviewClient';

const BlogReviewPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ templestayId: string }>;
  searchParams: Promise<{ page?: string }>;
}) => {
  const { templestayId } = await params;
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1', 10);

  const queryClient = new QueryClient();

  const cachedData = queryClient.getQueryData(['reviews', templestayId, currentPage]);

  if (!cachedData) {
    await queryClient.prefetchQuery(templeReviewsQueryOptions(templestayId, currentPage));
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogReviewClient templestayId={templestayId} initialPage={currentPage} />
    </HydrationBoundary>
  );
};

export default BlogReviewPage;

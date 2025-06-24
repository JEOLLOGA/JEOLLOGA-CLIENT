import {
  templeDetailQueryOptions,
  templeImagesQueryOptions,
  templeReviewsQueryOptions,
} from '@apis/templeInfo/prefetch';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import TempleDetailClient from './TempleDetailClient';

const TempleDetailPage = async ({ params }: { params: Promise<{ templestayId: string }> }) => {
  const { templestayId } = await params;
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(templeDetailQueryOptions(templestayId, userId || undefined)),
    queryClient.prefetchQuery(templeImagesQueryOptions(templestayId)),
    queryClient.prefetchQuery(templeReviewsQueryOptions(templestayId, 1)),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TempleDetailClient templestayId={templestayId} />
    </HydrationBoundary>
  );
};

export default TempleDetailPage;

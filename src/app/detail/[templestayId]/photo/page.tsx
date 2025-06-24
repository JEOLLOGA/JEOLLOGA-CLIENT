import { templeImagesQueryOptions } from '@apis/templeInfo/prefetch';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import TemplePhotoClient from './TemplePhotoClient';

const TemplePhotoPage = async ({ params }: { params: Promise<{ templestayId: string }> }) => {
  const { templestayId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(templeImagesQueryOptions(templestayId));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TemplePhotoClient templestayId={templestayId} />
    </HydrationBoundary>
  );
};

export default TemplePhotoPage;

import { templeImagesQueryOptions } from '@apis/templeInfo/prefetch';
import { TemplestayImgsResponse, TemplestayImg } from '@apis/templeInfo/type';
import PageName from '@components/common/pageName/PageName';
import { QueryClient } from '@tanstack/react-query';
import Image from 'next/image';

import * as styles from './style.css';

const TemplePhotoPage = async ({ params }: { params: Promise<{ templestayId: string }> }) => {
  const { templestayId } = await params;
  const queryClient = new QueryClient();

  const cachedData = queryClient.getQueryData(['images', templestayId]);

  if (!cachedData) {
    await queryClient.prefetchQuery(templeImagesQueryOptions(templestayId));
  }

  const data =
    queryClient.getQueryData<TemplestayImgsResponse>(['images', templestayId]) ||
    (await queryClient.fetchQuery(templeImagesQueryOptions(templestayId)));

  if (!data) {
    return <p>No temple images available</p>;
  }

  return (
    <div className={styles.photoContainer}>
      <div className={styles.headerBox}>
        <PageName title="사진" />
      </div>
      <div className={styles.photoGrid}>
        {data.templestayImgs.map((photo: TemplestayImg) => (
          <Image
            width={162}
            height={162}
            key={photo.imageUrlId}
            src={photo.imgUrl}
            alt={`Temple Stay ${photo.imageUrlId}`}
            className={styles.photoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplePhotoPage;

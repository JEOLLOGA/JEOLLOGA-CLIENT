'use client';

import useGetTempleImages from '@apis/templeImages';
import PageName from '@components/common/pageName/PageName';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import Image from 'next/image';

import * as styles from './style.css';

interface TemplePhotoClientProps {
  templestayId: string;
}

const TemplePhotoClient = ({ templestayId }: TemplePhotoClientProps) => {
  const { data, isLoading, isError } = useGetTempleImages(templestayId);

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  if (!data) {
    return <p>No user information available</p>;
  }

  return (
    <div className={styles.photoContainer}>
      <div className={styles.headerBox}>
        <PageName title="사진" />
      </div>
      <div className={styles.photoGrid}>
        {data.templestayImgs.map((photo) => (
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

export default TemplePhotoClient;

'use client';

import useGetTempleImages from '@apis/templeImages';
import PageName from '@components/common/pageName/PageName';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useParams } from 'react-router-dom';

import * as styles from './style.css';

const TemplePhotoPage = () => {
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleImages(String(templestayId));

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
          <img
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

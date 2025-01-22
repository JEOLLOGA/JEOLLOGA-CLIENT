import useGetTempleImages from '@apis/templeImages';
import PageName from '@components/common/pageName/PageName';
import { useParams } from 'react-router-dom';

import * as styles from './templePhotoPage.css';

const TemplePhotoPage = () => {
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleImages(String(templestayId));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No user information available</p>;
  }

  return (
    <div>
      <PageName title="사진" isLikeBtn={false} />
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

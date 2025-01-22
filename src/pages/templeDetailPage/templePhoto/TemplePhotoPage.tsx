import PageName from '@components/common/pageName/PageName';
import TEMPLE_PHOTO_DATA from '@constants/templePhoto';

import * as styles from './templePhotoPage.css';

const TemplePhotoPage = () => {
  return (
    <div>
      <PageName title="사진" isLikeBtn={false} />
      <div className={styles.photoGrid}>
        {TEMPLE_PHOTO_DATA.templestayImgs.map((photo) => (
          <img
            key={photo.id}
            src={photo.imgUrl}
            alt={`Temple Stay ${photo.id}`}
            className={styles.photoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplePhotoPage;

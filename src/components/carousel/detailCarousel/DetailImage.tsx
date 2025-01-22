import useNavigateTo from '@hooks/useNavigateTo';

import * as styles from './detailCarousel.css';
import NumberTag from './numberTag/NumberTag';

interface ImageItemProps {
  id: number;
  imgUrl: string;
  currentNum: number;
  totalNum: number;
}

const ImageItem = ({ id, imgUrl, currentNum, totalNum }: ImageItemProps) => {
  const navigateToPhoto = useNavigateTo('/detail/photo');

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={navigateToPhoto}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigateToPhoto();
        }
      }}
      className={styles.imageBox}
      key={id}>
      <img className={styles.imageStyle} src={imgUrl} alt={`Templestay ${id}`} draggable={false} />
      <div className={styles.numberStyle}>
        <NumberTag currentNum={currentNum} totalNum={totalNum} />
      </div>
    </div>
  );
};

export default ImageItem;

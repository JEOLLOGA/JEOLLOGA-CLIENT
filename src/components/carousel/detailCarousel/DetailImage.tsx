import * as styles from './detailCarousel.css';
import NumberTag from './numberTag/NumberTag';

interface ImageItemProps {
  id: number;
  imgUrl: string;
  currentNum: number;
  totalNum: number;
}

const ImageItem = ({ id, imgUrl, currentNum, totalNum }: ImageItemProps) => (
  <div className={styles.imageBox} key={id}>
    <img className={styles.imageStyle} src={imgUrl} alt={`Templestay ${id}`} draggable={false} />
    <div className={styles.numberStyle}>
      <NumberTag currentNum={currentNum} totalNum={totalNum} />
    </div>
  </div>
);

export default ImageItem;

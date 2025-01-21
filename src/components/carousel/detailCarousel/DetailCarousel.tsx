import TEMPLE_PHOTO_DATA from '@constants/templePhoto';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';

import * as styles from './detailCarousel.css';
import ImageItem from './DetailImage';

const DetailCarousel = () => {
  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: TEMPLE_PHOTO_DATA.total,
    moveDistance: 355,
  });

  return (
    <section ref={carouselRef} className={styles.imageWrapper}>
      <div
        className={styles.imageContainer}
        style={transformStyle}
        {...registDragEvent({
          onDragChange: handleDragChange,
          onDragEnd: handleDragEnd,
        })}>
        {TEMPLE_PHOTO_DATA.templestayImgs.map((image) => (
          <ImageItem
            key={image.id}
            id={image.id}
            imgUrl={image.imgUrl}
            currentNum={image.id}
            totalNum={TEMPLE_PHOTO_DATA.total}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailCarousel;

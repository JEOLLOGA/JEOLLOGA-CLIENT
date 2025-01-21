import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';

import * as styles from './detailCarousel.css';
import ImageItem from './DetailImage';

const mainImageData = {
  total: 4,
  templestayImgs: [
    {
      id: 1,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12916.png',
    },
    {
      id: 2,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      id: 3,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12915.png',
    },
    {
      id: 4,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12904.png',
    },
  ],
};

const DetailCarousel = () => {
  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: mainImageData.total,
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
        {mainImageData.templestayImgs.map((image) => (
          <ImageItem
            key={image.id}
            id={image.id}
            imgUrl={image.imgUrl}
            currentNum={image.id}
            totalNum={mainImageData.total}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailCarousel;

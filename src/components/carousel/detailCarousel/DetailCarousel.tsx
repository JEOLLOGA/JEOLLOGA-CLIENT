import useGetTempleImages from '@apis/templeImages';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import { useParams } from 'react-router-dom';

import * as styles from './detailCarousel.css';
import ImageItem from './DetailImage';

const DetailCarousel = () => {
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleImages(String(templestayId));

  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: data?.total || 0,
    moveDistance: 355,
  });

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
    <section ref={carouselRef} className={styles.imageWrapper}>
      <div
        className={styles.imageContainer}
        style={transformStyle}
        {...registDragEvent({
          onDragChange: handleDragChange,
          onDragEnd: handleDragEnd,
        })}>
        {data.templestayImgs.map((image) => (
          <ImageItem
            key={image.imageUrlId}
            id={image.imageUrlId}
            imgUrl={image.imgUrl}
            currentNum={image.imageUrlId}
            totalNum={data.total}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailCarousel;

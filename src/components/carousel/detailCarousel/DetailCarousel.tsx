import useGetTempleImages from '@apis/templeImages';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import { useParams } from 'next/navigation';

import * as styles from './detailCarousel.css';
import ImageItem from './DetailImage';

const largeEmptyImage = '@assets/images/img_gray_light_leaf_large.png';

const DetailCarousel = () => {
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleImages(String(templestayId));

  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: data?.total || 0,
    moveDistance: 355,
  });

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  if (!data) {
    return (
      <div className={styles.emptyImageContainer}>
        <img src={largeEmptyImage} alt="빈 이미지"></img>
      </div>
    );
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
        {data.templestayImgs.map((image, index) => (
          <ImageItem
            key={image.imageUrlId}
            id={image.imageUrlId}
            imgUrl={image.imgUrl}
            currentNum={index + 1}
            totalNum={data.total}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailCarousel;

import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import PopularCard from '@components/card/popularCard/PopularCard';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import React from 'react';

import * as styles from './popularCarousel.css';

const stayData = {
  rankings: [
    {
      ranking: 1,
      id: 1,
      templeName: '대원사(보성)',
      tag: '방긋방긋',
      region: '전남',
      liked: true,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      ranking: 2,
      id: 2,
      templeName: '수원사',
      tag: '방긋방긋',
      region: '경기',
      liked: true,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      ranking: 3,
      id: 3,
      templeName: '용흥사',
      tag: '방긋방긋',
      region: '전남',
      liked: false,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
  ],
};

const PopularCarousel = () => {
  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: stayData.rankings.length,
    moveDistance: 355,
  });

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const userId = Number(localStorage.getItem('userId'));

  const handleLikeToggle = (templestayId: number, liked: boolean) => {
    if (liked) {
      removeWishlistMutation.mutate({ userId, templestayId });
    } else {
      addWishlistMutation.mutate({ userId, templestayId });
    }
  };

  return (
    <section ref={carouselRef} className={styles.carouselWrapper}>
      <div
        className={styles.carouselContainer}
        style={transformStyle}
        {...registDragEvent({
          onDragChange: handleDragChange,
          onDragEnd: handleDragEnd,
        })}>
        {stayData.rankings.map((data) => (
          <PopularCard
            key={data.id}
            ranking={data.ranking}
            templeName={data.templeName}
            templeLoc={data.region}
            templeImg={data.imgUrl}
            isLiked={data.liked}
            tag={data.tag}
            onClick={() => {
              alert(`${data.templeName} 클릭됨!`);
            }}
            onLikeToggle={(liked: boolean) => handleLikeToggle(data.id, liked)}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCarousel;

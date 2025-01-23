import useGetRanking from '@apis/ranking';
import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import PopularCard from '@components/card/popularCard/PopularCard';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import React from 'react';

import * as styles from './popularCarousel.css';

const PopularCarousel = () => {
  const userId = Number(localStorage.getItem('userId'));

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const { data, isLoading, isError } = useGetRanking(userId);

  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: 3,
    moveDistance: 355,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

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
        {data?.rankings &&
          data.rankings.map((rankings) => (
            <PopularCard
              key={rankings.templestayId}
              ranking={rankings.ranking}
              templeName={rankings.templeName}
              templeLoc={rankings.region}
              templeImg={rankings.imgUrl}
              isLiked={rankings.liked}
              tag={rankings.tag}
              onClick={() => {
                alert(`${rankings.templeName} 클릭됨!`);
              }}
              onLikeToggle={(liked: boolean) => handleLikeToggle(rankings.templestayId, liked)}
            />
          ))}
      </div>
    </section>
  );
};

export default PopularCarousel;

import useGetRanking from '@apis/ranking';
import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import PopularCard from '@components/card/popularCard/PopularCard';
import CarouselIndex from '@components/carousel/popularCarousel/CarouselIndex';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import React from 'react';

import * as styles from './popularCarousel.css';

const PopularCarousel = () => {
  const userId = Number(localStorage.getItem('userId'));

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const { data, isLoading, isError } = useGetRanking(userId);

  const { currentIndex, carouselRef, transformStyle, handleDragChange, handleDragEnd } =
    useCarousel({
      itemCount: data?.rankings?.length || 0,
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
    <section className={styles.carouselWrapper}>
      <div ref={carouselRef} className={styles.carouselContainer}>
        <div
          className={styles.carouselBox}
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
      </div>
      <CarouselIndex total={data?.rankings?.length || 0} currentIndex={currentIndex} />
    </section>
  );
};

export default PopularCarousel;

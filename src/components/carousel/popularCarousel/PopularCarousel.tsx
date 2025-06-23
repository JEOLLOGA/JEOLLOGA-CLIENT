import useGetRanking from '@apis/ranking';
import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import PopularCard from '@components/card/popularCard/PopularCard';
import CarouselIndex from '@components/carousel/popularCarousel/CarouselIndex';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import useCarousel from '@hooks/useCarousel';
import { getStorageValue } from '@hooks/useLocalStorage';
import { useQueryClient } from '@tanstack/react-query';
import registDragEvent from '@utils/registDragEvent';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './popularCarousel.css';

interface PopularCarouselProps {
  onRequireLogin: () => void;
}

const PopularCarousel = ({ onRequireLogin }: PopularCarouselProps) => {
  const userId = Number(getStorageValue('userId'));
  const queryClient = useQueryClient();

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const { data, isLoading, isError } = useGetRanking(userId);

  const { currentIndex, carouselRef, transformStyle, handleDragChange, handleDragEnd } =
    useCarousel({
      itemCount: data?.rankings?.length || 0,
      moveDistance: 355,
    });

  const { logClickEvent } = useEventLogger('home_popularity_component');

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  const handleLikeToggle = (templestayId: number, liked: boolean) => {
    if (!userId) {
      onRequireLogin();
      return;
    }

    const mutation = liked ? removeWishlistMutation : addWishlistMutation;
    mutation.mutate(
      { userId, templestayId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['ranking', userId] });
          queryClient.refetchQueries({ queryKey: ['ranking', userId] });
        },
      },
    );
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
            data.rankings.map((rankings, index) => (
              <PopularCard
                key={rankings.templestayId}
                ranking={rankings.ranking}
                templeName={rankings.templeName}
                templeLoc={rankings.region}
                templeImg={rankings.imgUrl}
                isLiked={rankings.liked}
                tag={rankings.tag}
                onLikeToggle={(liked: boolean) => handleLikeToggle(rankings.templestayId, liked)}
                link={`/detail/${rankings.templestayId}`}
                onClick={() => {
                  logClickEvent('click_popularity_card', {
                    label: index + 1,
                  });
                }}
              />
            ))}
        </div>
      </div>
      <CarouselIndex total={data?.rankings?.length || 0} currentIndex={currentIndex} />
    </section>
  );
};

export default PopularCarousel;

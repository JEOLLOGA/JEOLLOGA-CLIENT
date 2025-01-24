import TempleStayCard from '@components/card/templeStayCard/TempleStayCard';
import React from 'react';

import container from './wishCardList.css';

interface WishCardListProps {
  data: {
    templestayId: number;
    templeName: string;
    templestayName: string;
    tag: string;
    region: string;
    type: string;
    imgUrl?: string;
    liked: boolean;
  }[];
  layout: 'vertical' | 'horizontal';
  onToggleWishlist: (templestayId: number, liked: boolean) => void;
  onClick?: (templestayId: number) => void;
}
const WishCardList = ({
  data,
  layout = 'vertical',
  onToggleWishlist,
  onClick,
}: WishCardListProps) => {
  return (
    <section className={container}>
      {data.map((temple) => (
        <TempleStayCard
          key={temple.templestayId}
          templestayId={temple.templestayId}
          templeName={temple.templeName}
          templestayName={temple.templestayName}
          tag={temple.tag}
          region={temple.region}
          type={temple.type}
          imgUrl={temple.imgUrl}
          liked={temple.liked}
          layout={layout}
          onToggleWishlist={onToggleWishlist}
          onClick={onClick}
        />
      ))}
    </section>
  );
};

export default WishCardList;

import React from 'react';

import TempleStayCard from '../TempleStayCard';
import container from './wishCardList.css';

interface WishCardListProps {
  data: {
    templestayId: number;
    templeName: string;
    templestayName: string;
    tag: string;
    region: string;
    type: string;
    imgUrl: string;
    liked: boolean;
  }[];
  layout: 'vertical' | 'horizontal';
}
const WishCardList = ({ data, layout = 'vertical' }: WishCardListProps) => {
  return (
    <section className={container}>
      {data.map((temple) => (
        <TempleStayCard
          key={temple.templestayId}
          id={temple.templestayId}
          templeName={temple.templeName}
          templestayName={temple.templestayName}
          tag={temple.tag}
          region={temple.region}
          type={temple.type}
          imgUrl={temple.imgUrl}
          liked={temple.liked}
          layout={layout}
        />
      ))}
    </section>
  );
};

export default WishCardList;

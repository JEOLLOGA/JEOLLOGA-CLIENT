import React from 'react';

import TempleStayCard from '../TempleStayCard';
import container from './searchCardList.css';

interface SearchCardListProps {
  data: {
    id: number;
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

const SearchCardList = ({ data, layout = 'horizontal' }: SearchCardListProps) => {
  return (
    <section className={container}>
      {data.map((temple) => (
        <TempleStayCard
          key={temple.id}
          id={temple.id}
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

export default SearchCardList;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import TempleStayCard from '../TempleStayCard';
import container from './searchCardList.css';

interface SearchCardListProps {
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
  onToggleWishlist: (templestayId: number, liked: boolean) => void;
  onRequireLogin?: () => void;
}

const SearchCardList = ({
  data,
  layout = 'horizontal',
  onToggleWishlist,
  onRequireLogin,
}: SearchCardListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (templestayId: number) => {
    navigate(`/detail/${templestayId}`);
  };

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
          onClick={() => handleCardClick(temple.templestayId)}
          onRequireLogin={onRequireLogin}
        />
      ))}
    </section>
  );
};

export default SearchCardList;

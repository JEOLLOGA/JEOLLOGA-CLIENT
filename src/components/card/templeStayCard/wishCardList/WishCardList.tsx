import TempleStayCard from '@components/card/templeStayCard/TempleStayCard';

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
}
const WishCardList = ({ data, layout = 'vertical', onToggleWishlist }: WishCardListProps) => {
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
          link={`/detail/${temple.templestayId}`}
        />
      ))}
    </section>
  );
};

export default WishCardList;

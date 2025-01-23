import InfoSection from '@components/card/templeStayCard/InfoSection';
import FlowerIcon from '@components/common/icon/flowerIcon/FlowerIcon';
import { useState } from 'react';

import * as styles from './templeStayCard.css';

interface TempleStayCardProps {
  templestayId: number;
  templeName: string;
  templestayName: string;
  tag: string;
  region: string;
  type: string;
  imgUrl: string;
  liked: boolean;
  layout: 'vertical' | 'horizontal';
  onToggleWishlist: (templestayId: number, liked: boolean) => void;
  onClick: () => void;
}

const TempleStayCard = ({
  templestayId,
  templeName,
  templestayName,
  tag,
  region,
  type,
  imgUrl,
  liked,
  layout,
  onToggleWishlist,
  onClick,
}: TempleStayCardProps) => {
  const [isWished, setIsWished] = useState(liked);
  const isHorizontal = layout === 'horizontal';

  const onClickWishBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWished((prev) => !prev);
    onToggleWishlist(templestayId, isWished);
  };

  return (
    <article
      className={isHorizontal ? styles.horizontalContainer : styles.verticalContainer}
      onClick={onClick}
      role="presentation">
      <section className={isHorizontal ? styles.horizontalImgSection : styles.verticalImgSection}>
        <img
          className={isHorizontal ? styles.horizontalImage : styles.verticalImage}
          src={imgUrl}
          alt={templeName + ' 대표사진'}
        />
        <button className={styles.wishBtn} onClick={onClickWishBtn}>
          <FlowerIcon isActive={isWished} />
        </button>
      </section>

      <InfoSection
        templeName={templeName}
        templestayName={templestayName}
        tag={tag}
        region={region}
        type={type}
      />
    </article>
  );
};

export default TempleStayCard;

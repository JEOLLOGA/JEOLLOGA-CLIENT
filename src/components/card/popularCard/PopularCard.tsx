import Icon from '@assets/svgs';
import RankBtn from '@components/card/popularCard/RankBtn';
import { useState } from 'react';

import * as styles from './popularCard.css';

interface PopularCardProps {
  ranking: number;
  templeName: string;
  templeLoc: string;
  templeImg: string;
  tag: string;
  onClick: () => void;
  isLiked?: boolean;
  onLikeToggle: (liked: boolean) => void;
}

const PopularCard = ({
  ranking,
  templeName,
  templeLoc,
  templeImg,
  tag,
  onClick,
  isLiked = false,
  onLikeToggle,
}: PopularCardProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    onLikeToggle(liked);
  };

  return (
    <div
      className={styles.cardWrapper}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}>
      <div>
        <div className={styles.imgBox} style={{ backgroundImage: `url(${templeImg})` }}>
          <RankBtn ranking={ranking} />
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottomContainer}>
            <span className={styles.templeName}>{templeName}</span>
            <div className={styles.bottomBox}>
              <span>{templeLoc}</span>
              <Icon.IcnDivider />
              <span>#{tag}</span>
            </div>
          </div>
          <button className={styles.likeBtn} onClick={handleLikeClick}>
            {liked ? <Icon.IcnFlowerPink /> : <Icon.IcnFlowerGray />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;

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
  isLiked?: boolean;
  onLikeToggle: (liked: boolean) => void;
  link: string;
  onClick: () => void;
}

const PopularCard = ({
  ranking,
  templeName,
  templeLoc,
  templeImg,
  tag,
  isLiked = false,
  onLikeToggle,
  link,
  onClick,
}: PopularCardProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      onLikeToggle(liked);
      return;
    }

    setLiked((prev) => !prev);
    onLikeToggle(liked);
  };

  return (
    <a href={link} className={styles.cardWrapper} onClick={onClick}>
      <div>
        <div className={styles.imgBox} style={{ backgroundImage: `url(${templeImg})` }}>
          <RankBtn ranking={ranking} />
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottomContainer}>
            <h3 className={styles.templeName}>{templeName}</h3>
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
    </a>
  );
};

export default PopularCard;

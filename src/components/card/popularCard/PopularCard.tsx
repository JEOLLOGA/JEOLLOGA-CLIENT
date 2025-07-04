'use client';

import Icon from '@assets/svgs';
import RankBtn from '@components/card/popularCard/RankBtn';
import { getStorageValue } from '@hooks/useLocalStorage';
import Image from 'next/image';
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
}: PopularCardProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const userId = Number(getStorageValue('userId'));
    if (!userId) {
      onLikeToggle(liked);
      return;
    }

    setLiked((prev) => !prev);
    onLikeToggle(liked);
  };

  return (
    <a
      href={link}
      className={styles.cardWrapper}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}>
      <div>
        <div className={styles.imgBox}>
          <Image
            src={templeImg}
            alt={`${templeName} 대표 이미지`}
            fill
            style={{ objectFit: 'cover' }}
          />
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

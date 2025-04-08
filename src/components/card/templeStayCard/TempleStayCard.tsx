'use client';
const errorImage = '/assets/images/img_gray_light_leaf_medium.png';
import InfoSection from '@components/card/templeStayCard/InfoSection';
import FlowerIcon from '@components/common/icon/flowerIcon/FlowerIcon';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './templeStayCard.css';

interface TempleStayCardProps {
  templestayId: number;
  templeName: string;
  templestayName: string;
  tag: string;
  region: string;
  type: string;
  imgUrl?: string;
  liked: boolean;
  layout: 'vertical' | 'horizontal';
  onToggleWishlist: (templestayId: number, liked: boolean) => void;
  onRequireLogin?: () => void;
  link: string;
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
  link,
  onRequireLogin,
}: TempleStayCardProps) => {
  const [isWished, setIsWished] = useState(liked);
  const isHorizontal = layout === 'horizontal';
  const { logClickEvent } = useEventLogger('templestay_card');
  const pathname = usePathname();

  const isWishPage = pathname === '/wishList';

  const onClickWishBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      onRequireLogin?.();
      return;
    }

    setIsWished((prev) => !prev);
    onToggleWishlist(templestayId, isWished);
    logClickEvent(`click_wish_${isWished ? 'remove' : 'add'}`, {
      label: templeName,
      screen: `${isWishPage ? 'wish' : 'templestay_card'}`,
    });
  };

  return (
    <a
      href={link}
      className={isHorizontal ? styles.horizontalContainer : styles.verticalContainer}
      onClick={() => logClickEvent('click_card_detail')}>
      {imgUrl ? (
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
      ) : (
        <div
          className={
            isHorizontal ? styles.horizontalEmptyImgSection : styles.verticalEmptyImgSection
          }>
          <img src={errorImage} alt="빈이미지"></img>
        </div>
      )}

      <InfoSection
        templeName={templeName}
        templestayName={templestayName}
        tag={tag}
        region={region}
        type={type}
      />
    </a>
  );
};

export default TempleStayCard;

import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import TapBar from '@components/common/tapBar/TapBar';
import SmallMap from '@components/templeDetail/naverMap/smallMap/SmallMap';
import TempleDetailInfo from '@components/templeDetail/templeDetailInfo/TempleDetailInfo';
import TempleInfo from '@components/templeDetail/templeInfo/templeInfo';
import TemplePrice from '@components/templeDetail/templePrice/TemplePrice';
import TempleReview from '@components/templeDetail/templeReview/TempleReview';
import TempleSchedule from '@components/templeDetail/templeSchedule/TempleSchedule';
import TempleTitle from '@components/templeDetail/templeTitle/TempleTitle';
import TempleTopbar from '@components/templeDetail/templeTopbar/TempleTopbar';
import { useEffect, useRef, useState } from 'react';

import * as styles from './TempleDetailPage.css';

const TempleDetailPage = () => {
  const tapBarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tapBarRef.current) return;

      const tapBarTop = tapBarRef.current.getBoundingClientRect().top;

      setIsSticky(tapBarTop <= 52);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.templeDetailWrapper}>
      <div className={styles.headerBox}>
        <TempleTopbar />
      </div>
      <div className={styles.topDetailContainer}>
        <div className={styles.templeTitleBox}>
          <TempleTitle />
          <TempleDetailInfo />
        </div>
        <div
          className={`${styles.tapBarContainer} ${isSticky ? styles.stickyTapBar : ''}`}
          ref={tapBarRef}>
          <TapBar type="detail" />
        </div>
      </div>
      <div className={styles.templeDetailMiddle}>
        <TempleReview />
        <TempleSchedule />
        <TemplePrice />
        <TempleInfo />
      </div>
      <SmallMap />
      <ButtonBar type="wish" label="예약하러 가기" />
    </div>
  );
};

export default TempleDetailPage;

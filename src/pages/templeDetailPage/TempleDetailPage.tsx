import DetailCarousel from '@components/carousel/detailCarousel/DetailCarousel';
import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import TapBar from '@components/common/tapBar/TapBar';
import SmallMap from '@components/templeDetail/naverMap/smallMap/SmallMap';
import StickyTapBar from '@components/templeDetail/stickyTapBar/StickyTapBar';
import TempleDetailInfo from '@components/templeDetail/templeDetailInfo/TempleDetailInfo';
import TempleInfo from '@components/templeDetail/templeInfo/templeInfo';
import TemplePrice from '@components/templeDetail/templePrice/TemplePrice';
import TempleReview from '@components/templeDetail/templeReview/TempleReview';
import TempleSchedule from '@components/templeDetail/templeSchedule/TempleSchedule';
import TempleTitle from '@components/templeDetail/templeTitle/TempleTitle';
import TempleTopbar from '@components/templeDetail/templeTopbar/TempleTopbar';

import * as styles from './templeDetailPage.css';

const TempleDetailPage = () => {
  return (
    <div className={styles.templeDetailWrapper}>
      <div className={styles.headerBox}>
        <TempleTopbar />
      </div>
      <div className={styles.topDetailContainer}>
        <DetailCarousel />
        <div className={styles.templeTitleBox}>
          <TempleTitle />
          <TempleDetailInfo />
        </div>
        <StickyTapBar>
          <TapBar type="detail" />
        </StickyTapBar>
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

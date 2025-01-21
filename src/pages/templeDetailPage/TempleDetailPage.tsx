import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import SmallMap from '@components/templeDetail/naverMap/smallMap/SmallMap';
import TempleDetailInfo from '@components/templeDetail/templeDetailInfo/TempleDetailInfo';
import TempleInfo from '@components/templeDetail/templeInfo/templeInfo';
import TemplePrice from '@components/templeDetail/templePrice/TemplePrice';
import TempleReview from '@components/templeDetail/templeReview/TempleReview';
import TempleSchedule from '@components/templeDetail/templeSchedule/TempleSchedule';
import TempleTitle from '@components/templeDetail/templeTitle/TempleTitle';
import TempleTopbar from '@components/templeDetail/templeTopbar/TempleTopbar';

import * as styles from './TempleDetailPage.css';

const TempleDetailPage = () => {
  return (
    <>
      <TempleTopbar />
      <TempleTitle />
      <TempleDetailInfo />
      <div className={styles.templeDetailMiddle}>
        <TempleReview />
        <TempleSchedule />
        <TemplePrice />
        <TempleInfo />
      </div>
      <SmallMap />
      <ButtonBar type="wish" label="예약하러 가기" />
    </>
  );
};

export default TempleDetailPage;

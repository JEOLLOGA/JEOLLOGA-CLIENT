import DetailInfo from '@components/common/detailInfo/DetailInfo';
import { TEMPLE_DETAIL_DATA } from '@constants/templeDetail';

import templeDetailInfoContainer from './templeDetailInfo.css';

const TempleDetailInfo = () => {
  return (
    <div className={templeDetailInfoContainer}>
      <DetailInfo title="위치" content={TEMPLE_DETAIL_DATA.templeLocation} />
      <DetailInfo title="전화" content={`+82 ${TEMPLE_DETAIL_DATA.phoneNumber}`} />
    </div>
  );
};

export default TempleDetailInfo;

import DetailInfo from '@components/common/detailInfo/DetailInfo';

import templeDetailInfoContainer from './templeDetailInfo.css';

interface TempleDetailInfoProps {
  address: string;
  phoneNumber: string;
}

const TempleDetailInfo = ({ address, phoneNumber }: TempleDetailInfoProps) => {
  return (
    <div className={templeDetailInfoContainer}>
      <DetailInfo title="위치" content={address} />
      <DetailInfo title="전화" content={`+82 ${phoneNumber}`} />
    </div>
  );
};

export default TempleDetailInfo;

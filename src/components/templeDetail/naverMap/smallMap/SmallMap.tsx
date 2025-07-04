import TextBtn from '@components/common/button/textBtn/TextBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';
import useNavigateTo from '@hooks/useNavigateTo';
import { useParams } from 'next/navigation';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './smallMap.css';
import MapContainer from '../MapContainer';

interface MapDataProps {
  detailAddress: string;
  latitude: number;
  longitude: number;
}

const SmallMap = ({ detailAddress, latitude, longitude }: MapDataProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(detailAddress);
    alert('주소가 복사되었습니다.');

    logClickEvent('click_copy', { label: detailAddress });
  };

  const { templestayId } = useParams();

  const navigateToHome = useNavigateTo(
    `/detail/${templestayId}/map?latitude=${latitude}&longitude=${longitude}`,
  );
  const { logClickEvent } = useEventLogger('map');

  return (
    <div className={styles.mapContainerWrapper} id="detail-section-4">
      <DetailTitle title="지도" />
      <div className={styles.mapContainerStyle}>
        <div className={styles.addressDetailStyle}>
          <p className={styles.addressWord}>{detailAddress}</p>
          <TextBtn text="복사하기" leftIcon="IcnPaste" onClick={copyToClipboard} />
        </div>
        <button className={styles.mapStyle} onClick={navigateToHome}>
          <MapContainer latitude={latitude} longitude={longitude} size="small" />
        </button>
      </div>
    </div>
  );
};

export default SmallMap;

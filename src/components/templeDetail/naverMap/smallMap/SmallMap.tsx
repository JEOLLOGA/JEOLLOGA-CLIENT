import TextBtn from '@components/common/button/textBtn/TextBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';
import useNavigateTo from '@constants/hooks/useNavigateTo';

import * as styles from './smallMap.css';
import MapContainer from '../MapContainer';

const mapData = {
  address: '서울 용산구 청파로 387',
  latitude: 37.55433,
  longitude: 126.9686,
};

const SmallMap = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(mapData.address);
    alert('주소가 복사되었습니다.');
  };

  const navigateToHome = useNavigateTo(
    `/detail/map?latitude=${mapData.latitude}&longitude=${mapData.longitude}`,
  );

  return (
    <div className={styles.mapContainerWrapper}>
      <DetailTitle title="지도" />
      <div className={styles.mapContainerStyle}>
        <div className={styles.addressDetailStyle}>
          <p>{mapData.address}</p>
          <TextBtn text="복사하기" leftIcon="IcnPaste" onClick={copyToClipboard} />
        </div>
        <button className={styles.mapStyle} onClick={navigateToHome}>
          <MapContainer latitude={mapData.latitude} longitude={mapData.longitude} size="small" />
        </button>
      </div>
    </div>
  );
};

export default SmallMap;

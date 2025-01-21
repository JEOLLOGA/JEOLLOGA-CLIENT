import ArrowBtn from '@components/common/button/arrowBtn/ArrowBtn';
import useNavigateTo from '@constants/hooks/useNavigateTo';
import { useLocation } from 'react-router-dom';

import * as styles from './largeMap.css';
import MapContainer from '../MapContainer';

const LargeMap = () => {
  const handleToBack = useNavigateTo(-1);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const latitudeString = params.get('latitude');
  const longitudeString = params.get('longitude');

  const latitude = latitudeString ? parseFloat(latitudeString) : 0;
  const longitude = longitudeString ? parseFloat(longitudeString) : 0;

  return (
    <>
      <div className={styles.largeMapContainer}>
        <div className={styles.arrowBtn}>
          <ArrowBtn onClick={handleToBack} />
        </div>
        <MapContainer latitude={latitude} longitude={longitude} size="large" />
      </div>
    </>
  );
};

export default LargeMap;

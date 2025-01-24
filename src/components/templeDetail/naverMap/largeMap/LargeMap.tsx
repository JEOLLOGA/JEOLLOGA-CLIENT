import ArrowBtn from '@components/common/button/arrowBtn/ArrowBtn';
import { useNavigate, useLocation } from 'react-router-dom';

import * as styles from './largeMap.css';
import MapContainer from '../MapContainer';

const LargeMap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const latitudeString = params.get('latitude');
  const longitudeString = params.get('longitude');

  const latitude = latitudeString ? parseFloat(latitudeString) : 0;
  const longitude = longitudeString ? parseFloat(longitudeString) : 0;

  const handleToBack = () => {
    navigate(-1);
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    });
  };

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

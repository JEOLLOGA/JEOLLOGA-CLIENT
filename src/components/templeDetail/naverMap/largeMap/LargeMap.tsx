import ArrowBtn from '@components/common/button/arrowBtn/ArrowBtn';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import * as styles from './largeMap.css';
import MapContainer from '../MapContainer';

const LargeMap = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const latitudeString = searchParams.get('latitude');
  const longitudeString = searchParams.get('longitude');

  const latitude = latitudeString ? parseFloat(latitudeString) : 0;
  const longitude = longitudeString ? parseFloat(longitudeString) : 0;

  const handleToBack = () => {
    router.back();
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

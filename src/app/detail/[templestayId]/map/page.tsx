import ArrowBtn from '@components/common/button/arrowBtn/ArrowBtn';
import MapContainer from '@components/templeDetail/naverMap/MapContainer';

import * as styles from './style.css';

const LargeMap = async ({
  searchParams,
}: {
  searchParams: Promise<{ latitude: string; longitude: string }>;
}) => {
  const params = await searchParams;
  const latitude = params.latitude ? parseFloat(params.latitude) : 0;
  const longitude = params.longitude ? parseFloat(params.longitude) : 0;

  return (
    <>
      <div className={styles.largeMapContainer}>
        <div className={styles.arrowBtn}>
          <ArrowBtn />
        </div>
        <MapContainer latitude={latitude} longitude={longitude} size="large" />
      </div>
    </>
  );
};

export default LargeMap;

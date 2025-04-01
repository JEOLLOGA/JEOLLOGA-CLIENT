import smallMarker from '@assets/images/icn_map.png';
import ArrowBtn from '@components/common/button/arrowBtn/ArrowBtn';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import * as styles from './style.css';

interface MapContainerProps {
  latitude: number;
  longitude: number;
  size: 'small' | 'large';
}

const MapContainer = ({ latitude, longitude, size }: MapContainerProps) => {
  useEffect(() => {
    const { naver } = window;

    const timeoutId = setTimeout(() => {
      const isSmall = size === 'small';

      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: isSmall ? 16 : 19,
        disableDoubleClickZoom: isSmall,
        scrollWheel: !isSmall,
        draggable: !isSmall,
        pinchZoom: !isSmall,
        keyboardShortcuts: !isSmall,
      };

      const map = new naver.maps.Map('map', mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: {
          url: smallMarker,
          size: isSmall ? new naver.maps.Size(53, 53) : new naver.maps.Size(63, 63),
          scaledSize: isSmall ? new naver.maps.Size(53, 53) : new naver.maps.Size(63, 63),
          anchor: isSmall ? new naver.maps.Point(26.5, 26.5) : new naver.maps.Size(31.5, 31.5),
        },
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [latitude, longitude, size]);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

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

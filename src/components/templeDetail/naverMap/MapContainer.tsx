'use client';
import { useEffect } from 'react';

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
          url: '/assets/images/icn_map.png',
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

export default MapContainer;

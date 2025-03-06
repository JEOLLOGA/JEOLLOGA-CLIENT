import Icon from '@assets/svgs';
import Map from '@components/card/mapCard/Map';
import React from 'react';

import * as styles from './mapCard.css';

const MapCard = () => {
  return (
    <section className={styles.mapWrapper}>
      <div className={styles.titleBox}>
        <p className={styles.title}>원하는 지역을 골라보세요!</p>
        <Icon.IcnDoubleArrowDown />
      </div>
      <Map />
    </section>
  );
};

export default MapCard;

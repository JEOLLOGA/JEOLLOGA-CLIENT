import EXCEPT_INFOS from '@constants/exceptInfos';
import React from 'react';

import * as styles from './exceptLayout.css';
import '@dotlottie/player-component';

interface ExceptLayoutProps {
  type: 'loading' | 'networkError';
}

const ExceptLayout = ({ type }: ExceptLayoutProps) => {
  const { title, lottie, subtitle } = EXCEPT_INFOS[type];

  return (
    <section className={styles.exceptWrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imgContainer}>
        <dotlottie-player src={lottie} autoplay loop style={{ width: 210, height: 210 }} />
      </div>
      <span className={styles.subtitle[type]}>{subtitle}</span>
    </section>
  );
};

export default ExceptLayout;

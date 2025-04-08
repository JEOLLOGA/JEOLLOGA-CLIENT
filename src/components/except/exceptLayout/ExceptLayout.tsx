'use client';

import LottiePlayer from '@components/common/lottie/LottiePlayer';
import EXCEPT_INFOS from '@constants/exceptInfos';
import React from 'react';

import * as styles from './exceptLayout.css';

interface ExceptLayoutProps {
  type: 'loading' | 'networkError';
}

const ExceptLayout = ({ type }: ExceptLayoutProps) => {
  const { title, lottie, subtitle } = EXCEPT_INFOS[type];

  return (
    <section className={styles.exceptWrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imgContainer}>
        <LottiePlayer keyId={type} src={lottie} style={{ width: 210, height: 210 }} />
      </div>
      <span className={styles.subtitle[type]}>{subtitle}</span>
    </section>
  );
};

export default ExceptLayout;

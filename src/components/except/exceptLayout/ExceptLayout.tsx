import EXCEPT_INFOS from '@constants/exceptInfos';
import React from 'react';

import * as styles from './exceptLayout.css';

interface ExceptLayoutProps {
  type: 'loading' | 'networkError';
}

const ExceptLayout = ({ type }: ExceptLayoutProps) => {
  const { title, imageSrc, imageAlt, imageWidth, subtitle } = EXCEPT_INFOS[type];

  return (
    <section className={styles.exceptWrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imgContainer}>
        <img src={imageSrc} alt={imageAlt} width={imageWidth} />
      </div>
      <span className={styles.subtitle[type]}>{subtitle}</span>
    </section>
  );
};

export default ExceptLayout;

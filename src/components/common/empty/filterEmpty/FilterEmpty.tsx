import emptyImage from '@assets/images/img_moktak_sad.png';
import React from 'react';

import * as styles from './filterEmpty.css';

const FilterEmpty = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.textStyle}>{'해당되는 템플스테이를\n찾지 못했어요'}</p>
        <img src={emptyImage} alt="검색결과 없음" />
      </div>
    </div>
  );
};

export default FilterEmpty;

import React from 'react';

import * as styles from './filterEmpty.css';

const FilterEmpty = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.textStyle}>{'해당되는 템플스테이를\n찾지 못했어요'}</p>
        <dotlottie-player
          src="src/assets/lotties/moktak_hit.lottie"
          autoplay
          loop
          style={{ width: '15rem', height: '10.3rem' }}
        />
      </div>
    </div>
  );
};

export default FilterEmpty;

import React from 'react';

import * as styles from './searchEmpty.css';

interface SearchEmptyProps {
  text: string;
}

const SearchEmpty = ({ text }: SearchEmptyProps) => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.textStyle}>
          '<span className={styles.highlight}>{`${text}`}</span>'{'에 대한\n검색결과가 없어요'}
        </p>
        <dotlottie-player
          key="search"
          src="src/assets/lotties/moktak_sad.lottie"
          autoplay
          loop
          style={{ width: '15rem', height: '10.3rem' }}
        />
      </div>
    </div>
  );
};

export default SearchEmpty;

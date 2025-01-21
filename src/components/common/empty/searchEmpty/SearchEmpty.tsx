import emptyImage from '@assets/images/img_moktak_sad.png';
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
        <img className={styles.imgStyle} src={emptyImage} alt="검색결과 없음" />
      </div>
    </div>
  );
};

export default SearchEmpty;

import Icon from '@assets/svgs';
import { useState } from 'react';

import * as styles from './searchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarLayout}>
        <div className={styles.pointer}>
          <Icon.IcnSearchMediumGray />
        </div>
        <input
          className={styles.inputStyle}
          placeholder="사찰명을 입력해 주세요"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>
      <div className={styles.pointer}>
        <Icon.IcnCloseLargeGray onClick={handleClearInput} />
      </div>
    </div>
  );
};

export default SearchBar;

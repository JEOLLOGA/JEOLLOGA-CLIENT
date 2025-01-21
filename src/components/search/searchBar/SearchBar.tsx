import Icon from '@assets/svgs';
import { useState } from 'react';

import * as styles from './searchBar.css';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setInputValue(value);
    }
  };

  const handleClearInput = () => {
    setInputValue('');
    onSearch('');
  };

  const handleSearch = () => {
    if (inputValue.trim() === '') return;
    onSearch(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarLayout}>
        <div
          className={styles.pointer}
          role="button"
          tabIndex={0}
          onClick={handleSearch}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}>
          <Icon.IcnSearchMediumGray />
        </div>
        <input
          className={styles.inputStyle}
          placeholder="텍스트 텍스트"
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          maxLength={10}
        />
      </div>
      <div className={styles.pointer}>
        <Icon.IcnCloseLargeGray onClick={handleClearInput} />
      </div>
    </div>
  );
};

export default SearchBar;

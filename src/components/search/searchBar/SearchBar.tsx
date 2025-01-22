import Icon from '@assets/svgs';
import useFilter from '@hooks/useFilter';
import { useState } from 'react';

import * as styles from './searchBar.css';

interface SearchBarProps {
  searchText?: string;
}

const SearchBar = ({ searchText }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(searchText || '');

  const { handleSearch } = useFilter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setInputValue(value);
    }
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleClickSearch = () => {
    if (inputValue.trim() === '') return;

    handleSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleClickSearch();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarLayout}>
        <div
          className={styles.pointer}
          role="button"
          tabIndex={0}
          onClick={() => handleClickSearch()}
          onKeyDown={(e) => e.key === 'Enter' && handleClickSearch()}>
          <Icon.IcnSearchMediumGray />
        </div>
        <input
          className={styles.inputStyle}
          placeholder="사찰명을 입력해 주세요"
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
          maxLength={10}
        />
      </div>
      <button className={styles.pointer} onClick={() => handleClearInput()}>
        <Icon.IcnCloseLargeGray />
      </button>
    </div>
  );
};

export default SearchBar;

import Icon from '@assets/svgs';
import SearchBar from '@components/search/searchBar/SearchBar';
import searchHeaderStyle from '@components/search/searchHeader/searchHeader.css';

interface SearchHeaderProps {
  onSearch: (text: string) => void;
}

const SearchHeader = ({ onSearch }: SearchHeaderProps) => {
  return (
    <header className={searchHeaderStyle}>
      <Icon.IcnArrowBlackLeft />
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default SearchHeader;

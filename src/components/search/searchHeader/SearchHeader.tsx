import Icon from '@assets/svgs';
import SearchBar from '@components/search/searchBar/SearchBar';
import searchHeaderStyle from '@components/search/searchHeader/searchHeader.css';
import useNavigateTo from '@hooks/useNavigateTo';

interface SearchHeader {
  searchText?: string;
}

const SearchHeader = ({ searchText }: SearchHeader) => {
  const handleToBack = useNavigateTo(-1);

  return (
    <header className={searchHeaderStyle}>
      <button onClick={handleToBack}>
        <Icon.IcnArrowBlackLeft />
      </button>
      <SearchBar searchText={searchText} />
    </header>
  );
};

export default SearchHeader;

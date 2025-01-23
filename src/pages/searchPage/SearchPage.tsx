import RecentBtnBox from '@components/search/recentBtn/RecentBtnBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import leftPaddingStyle from '@pages/searchPage/searchPage.css';

const SearchPage = () => {
  return (
    <>
      <SearchHeader prevPath={'/'}/>
      <div className={leftPaddingStyle}>
        <RecentBtnBox />
      </div>
    </>
  );
};

export default SearchPage;

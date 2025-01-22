import DetailTitle from '@components/detailTitle/DetailTitle';
import RecentBtnBox from '@components/search/recentBtn/RecentBtnBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';

import * as styles from './searchPage.css';

const SearchPage = () => {
  const handleSearch = (text: string) => {
    console.log(`${text}`); // 추후 api 연결
  };
  return (
    <>
      <SearchHeader onSearch={handleSearch} />
      <div className={styles.paddingStyle}>
        <DetailTitle title="최근 검색" isTotal size="small" rigntBtnLabel="전체 삭제" />
      </div>
      <div className={styles.leftPaddingStyle}>
        <RecentBtnBox />
      </div>
    </>
  );
};

export default SearchPage;

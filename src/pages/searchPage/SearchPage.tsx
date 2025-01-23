import DetailTitle from '@components/detailTitle/DetailTitle';
import RecentBtnBox from '@components/search/recentBtn/RecentBtnBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';

import * as styles from './searchPage.css';

const SearchPage = () => {
  return (
    <>
      <SearchHeader />
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

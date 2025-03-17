import { useGetSearchHistory, useDelAllSearchRecord, useDelSearchRecord } from '@apis/search';
import { Content } from '@apis/search/type';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import * as styles from '@components/search/recentBtn/recentBtnBox.css';
import useFilter from '@hooks/useFilter';
import useLocalStorage from '@hooks/useLocalStorage';

const RecentBtnBox = () => {
  const userId = localStorage.getItem('userId');
  const numericUserId = userId ? Number(userId) : null;

  const { data, isLoading, isError } = useGetSearchHistory(numericUserId);
  const { mutate: deleteAllSearchRecords } = useDelAllSearchRecord();
  const { mutate: deleteSearchRecord } = useDelSearchRecord();
  const { handleSearch } = useFilter();
  const { searchHistory, delStorageValue, setSearchHistory } = useLocalStorage();

  const searchData: Content[] = numericUserId ? data?.searchHistory || [] : searchHistory;

  const handleDeleteAll = () => {
    if (numericUserId) {
      deleteAllSearchRecords({ userId: numericUserId });
    } else {
      localStorage.removeItem('searchHistory');
      setSearchHistory([]);
    }
  };

  const handleRecentSearchClick = (searchContent: string) => {
    handleSearch(searchContent);
  };

  const handleDeleteSearch = (searchId: number) => {
    if (numericUserId) {
      deleteSearchRecord({ userId: numericUserId, searchId });
    } else {
      delStorageValue(searchId);
    }
  };

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  return (
    <section>
      <div className={styles.paddingStyle}>
        <DetailTitle
          title="최근 검색"
          isTotal
          size="small"
          rigntBtnLabel="전체 삭제"
          onClick={handleDeleteAll}
          rightBtnDisabled={searchData.length === 0}
        />
      </div>
      <div className={styles.recentBtnBox}>
        {searchData.length === 0 ? (
          <p className={styles.emptyResult}>최근 검색 내역이 없어요</p>
        ) : (
          searchData.map((item) => (
            <BasicBtn
              key={item.searchId}
              label={item.content}
              variant="lightGrayOutlined"
              size="small"
              rightIcon="IcnCloseSmallGray"
              onClick={() => handleRecentSearchClick(item.content)} // 검색어 클릭 이벤트
              onRightIconClick={() => handleDeleteSearch(item.searchId)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RecentBtnBox;

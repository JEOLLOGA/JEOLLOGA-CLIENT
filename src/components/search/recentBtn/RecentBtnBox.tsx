import { useGetSearchHistory, useDelAllSearchRecord } from '@apis/search';
import { Content } from '@apis/search/type';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import DetailTitle from '@components/detailTitle/DetailTitle';
import * as styles from '@components/search/recentBtn/recentBtnBox.css';
import { useState, useEffect } from 'react';

const RecentBtnBox = () => {
  const userId = localStorage.getItem('userId');
  const { data, isLoading, isError } = useGetSearchHistory(userId ? Number(userId) : null);
  // const { mutate: deleteSearchRecord } = useDelSearchRecord();
  const { mutate: deleteAllSearchRecords } = useDelAllSearchRecord();

  const [searchData, setSearchData] = useState<Content[]>([]);

  useEffect(() => {
    if (!userId) {
      const localSearchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      setSearchData(Array.isArray(localSearchHistory) ? localSearchHistory : []);
    } else if (data) {
      setSearchData(Array.isArray(data.searchHistory) ? data.searchHistory : []);
    }
  }, [data, userId]);

  // const handleDeleteSearch = (searchId: number) => {
  //   if (userId) {
  //     deleteSearchRecord({ userId: Number(userId), searchId });
  //   } else {
  //     // 로컬 스토리지에서 검색 기록 삭제
  //     const localSearchHistory: Content[] = JSON.parse(
  //       localStorage.getItem('searchHistory') || '[]',
  //     );
  //     const updatedHistory = localSearchHistory.filter((item) => item.searchId !== searchId);
  //     localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  //     setSearchData(updatedHistory);
  //   }
  // };

  const handleDeleteAll = () => {
    if (userId) {
      deleteAllSearchRecords({ userId: Number(userId) });
    } else {
      localStorage.removeItem('searchHistory');
      setSearchData([]);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
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
              // rightIcon="IcnCloseSmallGray"
              // onClick={() => handleDeleteSearch(item.searchId)}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RecentBtnBox;

import { useGetSearchHistory } from '@apis/search';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import * as styles from '@components/search/recentBtn/recentBtnBox.css';

const RecentBtnBox = () => {
  const userId = localStorage.getItem('userId');

  const { data, isLoading, isError } = useGetSearchHistory(Number(userId));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.recentBtnBox}>
      {data && data.searchHistory.length > 0 ? (
        data.searchHistory.map((item) => (
          <BasicBtn
            key={item.searchId}
            label={item.content}
            variant="lightGrayOutlined"
            size="small"
            rightIcon="IcnCloseSmallGray"
          />
        ))
      ) : (
        <p className={styles.emptyResult}>최근 검색 내역이 없어요</p>
      )}
    </div>
  );
};

export default RecentBtnBox;

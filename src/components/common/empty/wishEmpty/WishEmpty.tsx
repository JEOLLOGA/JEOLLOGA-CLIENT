import emptyImage from '@assets/images/img_gray_light_leaf_large.png';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import useFilter from '@hooks/useFilter';

import * as styles from './wishEmpty.css';

const WishEmpty = () => {
  const { handleSearch } = useFilter();

  return (
    <div className={styles.container}>
      <div className={styles.boxStyle}>
        <p className={styles.textStyle}>위시리스트가 비어있어요</p>
        <img src={emptyImage} alt="위시리스트 비어있음" />
      </div>
      <PageBottomBtn btnText="템플스테이 둘러보기" size="small" onClick={() => handleSearch()} />
    </div>
  );
};

export default WishEmpty;

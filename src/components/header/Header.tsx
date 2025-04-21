import Icon from '@assets/svgs';
import useNavigateTo from '@hooks/useNavigateTo';

import * as styles from './header.css';

const Header = () => {
  const navigateToWishList = useNavigateTo('/wishList');
  const navigateToMyPage = useNavigateTo('/myPage');

  return (
    <header className={styles.headerContainer}>
      <button onClick={useNavigateTo('/')}>
        <Icon.SmallLogo />
      </button>

      <nav className={styles.iconBox}>
        <button onClick={useNavigateTo('/search')}>
          <img
            src="/assets/svgs/icn_search_large_black.svg"
            className={styles.iconStyle}
            alt="검색 아이콘"
          />
        </button>
        <button onClick={navigateToMyPage}>
          <img
            src="/assets/svgs/icn_mypage.svg"
            className={styles.iconStyle}
            alt="마이페이지 아이콘"
          />
        </button>
        <button onClick={navigateToWishList}>
          <img
            src="/assets/svgs/icn_flower_pink.svg"
            className={`${styles.iconStyle} ${styles.flowerPinkStyle}`}
            alt="위시리스트 아이콘"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;

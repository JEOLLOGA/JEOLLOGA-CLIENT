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
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={useNavigateTo('/search')} />
        <Icon.IcnMyPage className={styles.iconStyle} onClick={navigateToMyPage} />
        <Icon.IcnFlowerPink
          className={`${styles.iconStyle} ${styles.flowerPinkStyle}`}
          onClick={navigateToWishList}
        />
      </nav>
    </header>
  );
};

export default Header;

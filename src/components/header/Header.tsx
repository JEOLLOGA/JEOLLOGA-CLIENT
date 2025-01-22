import Icon from '@assets/svgs';
import useNavigateTo from '@hooks/useNavigateTo';

import * as styles from './header.css';

const Header = () => {
  const handleClick = () => {};

  return (
    <header className={styles.headerContainer}>
      <button onClick={handleClick}>
        <Icon.SmallLogo />
      </button>
      <nav className={styles.iconBox}>
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={useNavigateTo('/search')} />
        <Icon.IcnWish className={styles.iconStyle} onClick={useNavigateTo('/wishlist')} />
        <Icon.IcnMyPage className={styles.iconStyle} onClick={useNavigateTo('/mypage')} />
      </nav>
    </header>
  );
};

export default Header;

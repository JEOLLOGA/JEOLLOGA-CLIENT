import Icon from '@assets/svgs';
import useNavigateTo from '@hooks/useNavigateTo';

import * as styles from './header.css';

const Header = () => {
  const handleClick = () => {};
  const navigateToWishList = useNavigateTo('/wishList');
  const navigateToMyPage = useNavigateTo('/myPage');

  return (
    <header className={styles.headerContainer}>
      <button onClick={handleClick}>
        <Icon.SmallLogo />
      </button>
      <nav className={styles.iconBox}>
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={useNavigateTo('/search')} />
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={() => handleClick()} />
        <Icon.IcnWish className={styles.iconStyle} onClick={navigateToWishList} />
        <Icon.IcnMyPage className={styles.iconStyle} onClick={navigateToMyPage} />
      </nav>
    </header>
  );
};

export default Header;

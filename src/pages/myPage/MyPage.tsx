import PageName from '@components/common/pageName/PageName';
import Footer from '@components/footer/Footer';
import UserInfo from '@components/userInfo/userInfo';

import * as styles from './myPage.css';

const MyPage = () => {
  return (
    <div className={styles.myPageWrapper}>
      <div className={styles.userInfoContainer}>
        <PageName title="마이페이지" isLikeBtn={false} />
        <UserInfo />
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;

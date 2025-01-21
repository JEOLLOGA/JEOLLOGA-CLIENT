import PageName from '@components/common/pageName/PageName';
import Footer from '@components/footer/Footer';
import UserInfo from '@components/userInfo/userInfo';

import myPageWrapper from './myPage.css';

const MyPage = () => {
  return (
    <div className={myPageWrapper}>
      <PageName title="마이페이지" isLikeBtn={false} />
      <UserInfo />
      <Footer />
    </div>
  );
};

export default MyPage;

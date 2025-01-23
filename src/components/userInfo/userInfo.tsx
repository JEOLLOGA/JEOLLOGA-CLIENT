import { usePostLogout } from '@apis/auth';
import USER_INFO from '@constants/userInfo';

import infoContainerStyle from './userInfo.css';
import AccountActions from './userInfoContent/accountAction/AccountAction';
import HelpSection from './userInfoContent/helpContent/HelpContent';
import TopInfo from './userInfoContent/nameContent/NameContent';
import MemberInfo from './userInfoContent/userDetailInfo.tsx/UserDetailInfo';
import UserInfoSection from './userInfoContent/userInfoSection/userInfoSection';

const UserInfo = () => {
  const postLogout = usePostLogout();

  const handleNoticeClick = () => {
    alert('notice click');
  };
  const handleQuestionClick = () => {
    alert('question click');
  };
  const handleLogoutClick = () => {
    postLogout.mutate();
  };
  const handleDeleteClick = () => {
    alert('delete click');
  };

  return (
    <div className={infoContainerStyle}>
      <TopInfo nickname={USER_INFO.nickname} email={USER_INFO.email} />
      <UserInfoSection title="회원정보">
        <MemberInfo
          ageRange={USER_INFO.ageRange}
          gender={USER_INFO.gender}
          religion={USER_INFO.religion}
        />
      </UserInfoSection>
      <UserInfoSection title="도움말">
        <HelpSection onNoticeClick={handleNoticeClick} onQuestionClick={handleQuestionClick} />
      </UserInfoSection>
      <AccountActions onLogoutClick={handleLogoutClick} onDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default UserInfo;

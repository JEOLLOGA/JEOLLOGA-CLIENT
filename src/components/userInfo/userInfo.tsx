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

  const userId = localStorage.getItem('userId');
  const { data, isLoading, isError } = useGetMyPage(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No user information available</p>;
  }

  return (
    <div className={infoContainerStyle}>
      <TopInfo nickname={data.nickname} email={data.email} />
      <UserInfoSection title="회원정보">
        <MemberInfo ageRange={data.ageRange} gender={data.gender} religion={data.religion} />
      </UserInfoSection>
      <UserInfoSection title="도움말">
        <HelpSection onNoticeClick={handleNoticeClick} onQuestionClick={handleQuestionClick} />
      </UserInfoSection>
      <AccountActions onLogoutClick={handleLogoutClick} onDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default UserInfo;

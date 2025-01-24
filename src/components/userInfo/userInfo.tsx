import infoContainerStyle from './userInfo.css';
import AccountActions from './userInfoContent/accountAction/AccountAction';
import HelpSection from './userInfoContent/helpContent/HelpContent';
import TopInfo from './userInfoContent/nameContent/NameContent';
import MemberInfo from './userInfoContent/userDetailInfo.tsx/UserDetailInfo';
import UserInfoSection from './userInfoContent/userInfoSection/userInfoSection';

interface UserInfoProps {
  data?: {
    nickname: string;
    email: string;
    ageRange?: string;
    gender?: string;
    religion?: string;
  };
  onLogoutClick: () => void;
  onDeleteClick: () => void;
}

const UserInfo = ({ data, onLogoutClick, onDeleteClick }: UserInfoProps) => {
  const handleNoticeClick = () => {
    window.open('https://www.notion.so/1817c7beb7788076bdddfd4ba4b43008?pvs=4', '_blank');
  };

  const handleQuestionClick = () => {
    window.open('https://www.notion.so/1807c7beb7788005a73bc799ce8719bf?pvs=4', '_blank');
  };

  if (!data) {
    return <p>No user information available</p>;
  }

  return (
    <div className={infoContainerStyle}>
      <TopInfo nickname={data.nickname} email={data.email} />
      <UserInfoSection title="회원정보">
        <MemberInfo
          ageRange={data.ageRange || '정보 없음'}
          gender={data.gender || '정보 없음'}
          religion={data.religion || '정보 없음'}
        />
      </UserInfoSection>
      <UserInfoSection title="도움말">
        <HelpSection onNoticeClick={handleNoticeClick} onQuestionClick={handleQuestionClick} />
      </UserInfoSection>
      <AccountActions onLogoutClick={onLogoutClick} onDeleteClick={onDeleteClick} />
    </div>
  );
};

export default UserInfo;

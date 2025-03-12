import { usePostLogout, usePostWithdraw } from '@apis/auth';
import { useGetMyPage } from '@apis/user';
import ModalContainer from '@components/common/modal/ModalContainer';
import PageName from '@components/common/pageName/PageName';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import Footer from '@components/footer/Footer';
import UserInfo from '@components/userInfo/userInfo';
import { useState } from 'react';

import * as styles from './myPage.css';

const MyPage = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const userId = localStorage.getItem('userId') || '';
  const parseUserId = userId ? parseInt(userId, 10) : null;

  const postLogout = usePostLogout();
  const postWithdraw = usePostWithdraw({ userId: parseUserId });

  const { data, isLoading, isError } = useGetMyPage(userId);

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    postLogout.mutate();
    setIsLogoutModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    postWithdraw.mutate();
    setIsLogoutModalOpen(false);
  };

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  return (
    <div className={styles.myPageWrapper}>
      <div className={styles.userInfoContainer}>
        <PageName title="마이페이지" />
        <UserInfo data={data} onLogoutClick={handleLogoutClick} onDeleteClick={handleDeleteClick} />
      </div>
      <Footer />

      {isLogoutModalOpen && (
        <div className={styles.modalOverlay}>
          <ModalContainer
            modalTitle="정말 로그아웃하시겠어요?"
            modalBody="로그아웃 시 일부 기능 이용이 제한됩니다"
            isOpen={isLogoutModalOpen}
            handleClose={() => setIsLogoutModalOpen(false)}
            handleSubmit={confirmLogout}
            leftBtnLabel="취소"
            rightBtnLabel="로그아웃하기"
            reverse={true}
          />
        </div>
      )}

      {isDeleteModalOpen && (
        <div className={styles.modalOverlay}>
          <ModalContainer
            modalTitle="정말 탈퇴하시겠어요?"
            modalBody="탈퇴 시 계정 정보는 복구할 수 없습니다"
            isOpen={isDeleteModalOpen}
            handleClose={() => setIsDeleteModalOpen(false)}
            handleSubmit={confirmDelete}
            leftBtnLabel="취소"
            rightBtnLabel="탈퇴하기"
            reverse={true}
          />
        </div>
      )}
    </div>
  );
};

export default MyPage;

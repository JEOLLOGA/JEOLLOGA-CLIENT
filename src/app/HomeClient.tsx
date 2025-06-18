'use client';

import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import ModalContainer from '@components/common/modal/ModalContainer';
import useFilter from '@hooks/useFilter';
import useNavigateTo from '@hooks/useNavigateTo';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';
import { contentAtom } from 'src/store/store';

import * as styles from './homePage.css';

const HomeClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigateToLogin = useNavigateTo('/loginStart');
  const { logClickEvent } = useEventLogger('modal_login_wish');

  const { handleResetFilter } = useFilter();
  const setContent = useSetAtom(contentAtom);

  useEffect(() => {
    setContent('');
    handleResetFilter();
    localStorage.setItem('prevPage', '/');
  }, []);

  const handleLogin = () => {
    navigateToLogin();
    logClickEvent('click_login');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    logClickEvent('click_cancel');
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <ModalContainer
            modalTitle="로그인 하시겠어요?"
            modalBody="찜하려면 로그인이 필요해요."
            isOpen={isModalOpen}
            handleClose={handleClose}
            handleSubmit={handleLogin}
            leftBtnLabel="취소"
            rightBtnLabel="로그인하기"
          />
        </div>
      )}
      <PopularCarousel onRequireLogin={() => setIsModalOpen(true)} />
    </>
  );
};

export default HomeClient;

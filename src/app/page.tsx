'use client';
import { useGetNickname } from '@apis/user';
import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import ModalContainer from '@components/common/modal/ModalContainer';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import useFilter from '@hooks/useFilter';
import { getStorageValue } from '@hooks/useLocalStorage';
import useNavigateTo from '@hooks/useNavigateTo';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';
import { contentAtom } from 'src/store/store';

import * as styles from './homePage.css';

const HomePage = () => {
  const { handleResetFilter } = useFilter();
  const setContent = useSetAtom(contentAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateToLogin = useNavigateTo('/loginStart');
  const { logClickEvent } = useEventLogger('modal_login_wish');

  const handleLogin = () => {
    navigateToLogin();
    logClickEvent('click_login');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    logClickEvent('click_cancel');
  };

  useEffect(() => {
    setContent('');
    handleResetFilter();
    localStorage.setItem('prevPage', '/');
  }, []);

  const userId = Number(getStorageValue('userId'));
  const { data, isLoading } = useGetNickname(userId);

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  return (
    <div className={styles.homeWrapper}>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <ModalContainer
            modalTitle="로그인 하시겠어요?"
            modalBody="찜하려면 로그인이 필요해요."
            isOpen={isModalOpen}
            handleClose={closeModal}
            handleSubmit={handleLogin}
            leftBtnLabel="취소"
            rightBtnLabel="로그인하기"
          />
        </div>
      )}

      <Header />
      <LookCard name={data?.nickname} />
      <MapCard />
      <div className={styles.curationCarouselStyle}>
        <DetailTitle title="절로가 PICK!" />
        <CurationCarousel />
      </div>
      <div className={styles.popularCarouselStyle}>
        <DetailTitle title="이번 주 인기 템플스테이" />
        <PopularCarousel onRequireLogin={openModal} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

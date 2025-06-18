'use client';

import { useGetNickname } from '@apis/user';
import HomeClient from '@app/HomeClient';
import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { getStorageValue } from '@hooks/useLocalStorage';

import * as styles from './homePage.css';

const HomePage = () => {
  const userId = Number(getStorageValue('userId'));
  const { data, isLoading } = useGetNickname(userId);

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <LookCard name={data?.nickname} />
      <MapCard />
      <div className={styles.curationCarouselStyle}>
        <DetailTitle title="절로가 PICK!" />
        <CurationCarousel />
      </div>
      <div className={styles.popularCarouselStyle}>
        <DetailTitle title="이번 주 인기 템플스테이" />
        <HomeClient /> {/* 인기 템플스테이 캐러셀 */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

import { useGetNickname } from '@apis/user';
import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import useFilter from '@hooks/useFilter';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { contentAtom } from 'src/store/store';

import * as styles from './homePage.css';

const HomePage = () => {
  const { handleResetFilter } = useFilter();
  const setContent = useSetAtom(contentAtom);

  useEffect(() => {
    setContent('');
    handleResetFilter();
    localStorage.setItem('prevPage', '/');
  }, []);

  const userId = Number(localStorage.getItem('userId'));
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
        <PopularCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

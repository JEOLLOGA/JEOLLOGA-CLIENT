import { fetchUserNickname } from '@apis/user/axios';
import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import CarouselIndex from '@components/carousel/popularCarousel/CarouselIndex';
import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import DetailTitle from '@components/detailTitle/DetailTitle';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import useFilter from '@hooks/useFilter';
import { useEffect, useState } from 'react';

import * as styles from './homePage.css';

const HomePage = () => {
  const { handleResetFilter } = useFilter();
  const [nickname, setNickname] = useState<string>('');

  useEffect(() => {
    handleResetFilter();
    const userId = Number(localStorage.getItem('userId'));
    if (userId) {
      fetchUserNickname(userId).then((data) => setNickname(data.nickname));
    } else {
      setNickname('일로가');
    }
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <LookCard name={nickname} />
      <MapCard />
      <div className={styles.curationCarouselStyle}>
        <DetailTitle title="절로가 PICK!" />
        <CurationCarousel />
      </div>
      <div className={styles.popularCarouselStyle}>
        <DetailTitle title="이번 주 인기 템플스테이" />
        <PopularCarousel />
        <CarouselIndex total={3} currentIndex={1} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

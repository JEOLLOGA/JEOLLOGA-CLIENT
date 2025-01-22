import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import PopularCarousel from '@components/carousel/popularCarousel/PopularCarousel';
import DetailTitle from '@components/detailTitle/DetailTitle';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';

import * as styles from './homePage.css';

const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <LookCard name="절로가" />
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

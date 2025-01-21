import LookCard from '@components/card/lookCard/LookCard';
import MapCard from '@components/card/mapCard/MapCard';
import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import CarouselIndex from '@components/carousel/popularCarousel/CarouselIndex';
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
        <DetailTitle title="절로가 큐레이션" />
        <CurationCarousel />
      </div>
      <div className={styles.popularCarouselStyle}>
        <DetailTitle title="이번주 인기스테이" />
        <PopularCarousel />
        <CarouselIndex total={3} currentIndex={1} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

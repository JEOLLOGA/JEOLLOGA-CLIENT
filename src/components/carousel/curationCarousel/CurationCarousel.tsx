import CurationCard from '@components/curation/curationCard/CurationCard';
import { CURATION_INFO } from '@constants/curationInfo';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './curationCarousel.css';

const CurationCarousel = () => {
  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: CURATION_INFO.length,
    moveDistance: 295,
  });

  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/curation/${index + 1}`);
    window.scrollTo(0, 0);
  };

  return (
    <section ref={carouselRef} className={styles.carouselWrapper}>
      <div className={styles.emptyBox} />
      <div
        className={styles.carouselContainer}
        style={transformStyle}
        {...registDragEvent({
          onDragChange: handleDragChange,
          onDragEnd: handleDragEnd,
        })}>
        {CURATION_INFO.map((data, index) => (
          <CurationCard
            key={index}
            bgImage={data.bgImage}
            title={data.title}
            subtitle={data.subtitle}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default CurationCarousel;

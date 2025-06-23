import CurationCard from '@components/curation/curationCard/CurationCard';
import { CURATION_INFO } from '@constants/curationInfo';
import useCarousel from '@hooks/useCarousel';
import registDragEvent from '@utils/registDragEvent';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './curationCarousel.css';

const CurationCarousel = () => {
  const { carouselRef, transformStyle, handleDragChange, handleDragEnd } = useCarousel({
    itemCount: CURATION_INFO.length,
    moveDistance: 295,
  });

  const { logClickEvent } = useEventLogger('home_pick');

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
            link={`/curation/${index + 1}`}
            onClick={() => {
              logClickEvent('click_curation_card', {
                label: index + 1,
              });
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CurationCarousel;

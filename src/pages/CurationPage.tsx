import { CURATION_IMAGES } from '@constants/curationInfo';
import { useParams } from 'react-router-dom';

const CurationPage = () => {
  const { index } = useParams();
  const indexNum = parseInt(index || '0');

  let images: string[] = [];

  if (indexNum === 1) {
    images = CURATION_IMAGES.popular;
  } else if (indexNum === 2) {
    images = CURATION_IMAGES.bonginsa;
  } else if (indexNum === 3) {
    images = CURATION_IMAGES.beginner;
  } else if (indexNum === 4) {
    images = CURATION_IMAGES.doglover;
  }

  return (
    <section style={{ marginTop: '-1.2rem' }}>
      <div>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="흠" />
        ))}
      </div>
    </section>
  );
};

export default CurationPage;

import { CURATION_IMAGES } from '@constants/curationInfo';
import { useParams } from 'react-router-dom';

const CurationPage = () => {
  const { index } = useParams();
  const indexNum = parseInt(index || '0');

  const images = Object.values(CURATION_IMAGES)[indexNum - 1] || [];

  return (
    <section style={{ marginTop: '-1.2rem' }}>
      <div>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="큐레이션 이미지" />
        ))}
      </div>
    </section>
  );
};

export default CurationPage;

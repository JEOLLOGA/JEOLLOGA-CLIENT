import PageName from '@components/common/pageName/PageName';
import { CURATION_IMAGES } from '@constants/curationInfo';
import { useParams } from 'react-router-dom';

import { headerBox, contentBox } from './curationPage.css';

const CurationPage = () => {
  const { index } = useParams();
  const indexNum = parseInt(index || '0');

  const images = Object.values(CURATION_IMAGES)[indexNum - 1] || [];

  return (
    <section>
      <div className={headerBox}>
        <PageName title="큐레이션" isLikeBtn={false} />
      </div>
      <div className={contentBox}>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="큐레이션 이미지" />
        ))}
      </div>
    </section>
  );
};

export default CurationPage;

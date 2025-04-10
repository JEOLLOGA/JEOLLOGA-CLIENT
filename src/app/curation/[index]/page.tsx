'use client';

import PageName from '@components/common/pageName/PageName';
import { CURATION_IMAGES } from '@constants/curationInfo';
import { useParams } from 'next/navigation';

import { headerBox, contentBox } from './curationPage.css';

export const dynamic = 'force-dynamic';

const CurationPage = () => {
  const params = useParams();
  const indexRaw = params?.index;

  const indexStr = Array.isArray(indexRaw) ? indexRaw[0] : indexRaw || '0';
  const indexNum = parseInt(indexStr);

  const images = Object.values(CURATION_IMAGES)[indexNum - 1] || [];

  return (
    <section>
      <div className={headerBox}>
        <PageName title="큐레이션" />
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

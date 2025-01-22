import DetailTitle from '@components/detailTitle/DetailTitle';
import { TEMPLE_DETAIL_DATA } from '@constants/templeDetail';
import useExpandHook from '@hooks/useExpandHook/useExpandHook';
import { useRef } from 'react';

import ContentCollapse from './contentCollapse/ContentCollapse';
import * as styles from './templeInfo.css';

const TempleInfo = () => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const { isAppeared, isExpanded, handleToggleExpand } = useExpandHook(contentRef);

  return (
    <div className={styles.templeInfoContainer} id="detail-section-3">
      <DetailTitle title="템플스테이 정보" />
      <div className={styles.templeInfoBoxStyle}>
        <h3 className={styles.templeInfoTitle}>{TEMPLE_DETAIL_DATA.introduction[0]}</h3>
        <p
          ref={contentRef}
          className={`${styles.templeInfoContent} ${isExpanded ? styles.expandedContent : ''}`}>
          {TEMPLE_DETAIL_DATA.introduction[1]}
        </p>
        {isAppeared && (
          <ContentCollapse
            leftIcon={isExpanded ? 'IcnArrowGrayUp' : 'IcnArrowGrayDown'}
            text={isExpanded ? '접어두기' : '더보기'}
            onClick={handleToggleExpand}
          />
        )}
      </div>
    </div>
  );
};

export default TempleInfo;

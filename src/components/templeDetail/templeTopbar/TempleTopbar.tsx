import PageName from '@components/common/pageName/PageName';
import { TEMPLE_DETAIL_DATA } from '@constants/templeDetail';

const TempleTopbar = () => {
  const handleToLikeButton = () => {
    alert('좋아요버튼클릭');
  };
  return (
    <div>
      <PageName
        title={`${TEMPLE_DETAIL_DATA.templeName} ${TEMPLE_DETAIL_DATA.templestayName}`}
        onRightClick={handleToLikeButton}
        isLikeBtn={true}
      />
    </div>
  );
};

export default TempleTopbar;

import PageName from '@components/common/pageName/PageName';
import useNavigateTo from '@hooks/useNavigateTo';

const TempleDetailData = {
  templeName: '봉은사',
  templestayName: '명상 차담 템플스테이',
};

const TempleDetailPage = () => {
  const handleToBack = useNavigateTo(-1);
  const handleToLikeButton = () => {
    alert('좋아요버튼클릭');
  };

  return (
    <div>
      <PageName
        title={`${TempleDetailData.templeName} ${TempleDetailData.templestayName}`}
        onLeftClick={handleToBack}
        onRightClick={handleToLikeButton}
        isLikeBtn={true}
      />
    </div>
  );
};

export default TempleDetailPage;

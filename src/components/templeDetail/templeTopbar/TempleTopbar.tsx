import PageName from '@components/common/pageName/PageName';

interface TempleTopbarProps {
  templeName: string;
  templestayName: string;
}

const TempleTopbar = ({ templeName, templestayName }: TempleTopbarProps) => {
  const handleToLikeButton = () => {
    alert('좋아요버튼클릭');
  };
  return (
    <div>
      <PageName
        title={`${templeName} ${templestayName}`}
        onRightClick={handleToLikeButton}
        isLikeBtn={true}
      />
    </div>
  );
};

export default TempleTopbar;

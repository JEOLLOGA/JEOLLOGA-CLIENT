import PageName from '@components/common/pageName/PageName';

interface TempleTopbarProps {
  templeName: string;
  templestayName: string;
  liked: boolean;
  onToggleWishlist: () => void;
}

const TempleTopbar = ({
  templeName,
  templestayName,
  liked,
  onToggleWishlist,
}: TempleTopbarProps) => {
  return (
    <div>
      <PageName
        title={`${templeName} ${templestayName}`}
        onRightClick={onToggleWishlist}
        isLikeBtn={true}
        isLiked={liked}
      />
    </div>
  );
};

export default TempleTopbar;

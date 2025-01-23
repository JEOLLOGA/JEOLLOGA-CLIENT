import PageName from '@components/common/pageName/PageName';
import useNavigateTo from '@hooks/useNavigateTo';

interface TempleTopbarProps {
  templeName: string;
  templestayName: string;
}

const TempleTopbar = ({ templeName, templestayName }: TempleTopbarProps) => {
  const navigateToWishlist = useNavigateTo('/wishList');

  return (
    <div>
      <PageName
        title={`${templeName} ${templestayName}`}
        onRightClick={navigateToWishlist}
        isLikeBtn={true}
      />
    </div>
  );
};

export default TempleTopbar;

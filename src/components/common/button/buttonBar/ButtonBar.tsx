import buttonBarContainer from '@components/common/button/buttonBar/buttonBar.css';
import FlowerBtn from '@components/common/button/flowerBtn/FlowerBtn';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import TextBtn from '@components/common/button/textBtn/TextBtn';

interface ButtonBarProps {
  type: 'reset' | 'wish';
  label: string;
  largeBtnClick: () => void;
  handleResetFilter?: () => void;
  liked?: boolean;
  onToggleWishlist?: () => void;
}

const ButtonBar = ({
  type,
  label,
  largeBtnClick,
  handleResetFilter = () => {},
  liked,
  onToggleWishlist,
}: ButtonBarProps) => {
  const renderLeftButton = () =>
    type === 'wish' ? (
      <FlowerBtn label="찜하기" isActive={liked} isLeftIcn onClick={onToggleWishlist} />
    ) : (
      <TextBtn
        text="초기화"
        onClick={handleResetFilter}
        leftIcon="IcnReset"
        size="medium"
        clicked={liked}
      />
    );

  return (
    <div className={buttonBarContainer}>
      {renderLeftButton()}
      <PageBottomBtn btnText={label} size="small" onClick={largeBtnClick} />
    </div>
  );
};

export default ButtonBar;

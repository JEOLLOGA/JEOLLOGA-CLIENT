import buttonBarContainer from '@components/common/button/buttonBar/buttonBar.css';
import FlowerBtn from '@components/common/button/flowerBtn/FlowerBtn';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import TextBtn from '@components/common/button/textBtn/TextBtn';
import { useState } from 'react';

interface ButtonBarProps {
  type: 'reset' | 'wish';
  label: string;
  largeBtnClick: () => void;
  handleResetFilter?: () => void;
}

const ButtonBar = ({
  type,
  label,
  largeBtnClick,
  handleResetFilter = () => {},
}: ButtonBarProps) => {
  const [isActive, setIsActive] = useState(false);

  const onClickLeftBtn = () => {
    setIsActive((prev) => !prev);
  };

  const renderLeftButton = () =>
    type === 'wish' ? (
      <FlowerBtn label="찜하기" isActive={isActive} isLeftIcn onClick={onClickLeftBtn} />
    ) : (
      <TextBtn
        text="초기화"
        onClick={handleResetFilter}
        leftIcon="IcnReset"
        size="medium"
        clicked={isActive}
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

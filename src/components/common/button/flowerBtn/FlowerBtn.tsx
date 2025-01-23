import FlowerIcon from '@components/common/icon/FlowerIcon';

import * as styles from './flowerBtn.css';

interface FlowerBtnProps {
  isRightIcn?: boolean;
  isLeftIcn?: boolean;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FlowerBtn = ({
  isRightIcn = false,
  isLeftIcn = false,
  label,
  isActive,
  onClick,
}: FlowerBtnProps) => {
  return (
    <button className={styles.FlowerBtnStyle} onClick={onClick}>
      {isLeftIcn && <FlowerIcon isActive={isActive} />}
      <p className={styles.textStyle({ active: isActive ? true : false })}>{label}</p>
      {isRightIcn && <FlowerIcon isActive={isActive} />}
    </button>
  );
};

export default FlowerBtn;

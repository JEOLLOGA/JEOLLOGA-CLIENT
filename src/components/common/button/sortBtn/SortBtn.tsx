import Icon from '@assets/svgs';

import * as styles from './sortBtn.css';

interface SortBtnProps {
  text: string;
  onClick: () => void;
}

const SortBtn = ({ text, onClick }: SortBtnProps) => {
  return (
    <button className={styles.buttonStyle} onClick={onClick}>
      <p className={styles.textStyle}>{text}</p>
      <Icon.IcnArrowSmallGrayDown />
    </button>
  );
};

export default SortBtn;

import Icon from '@assets/svgs';

import * as styles from './contentCollapse.css';

interface ContetnCollapseProps {
  leftIcon: keyof typeof Icon;
  text: string;
  onClick: () => void;
}

const ContentCollapse = ({ leftIcon, text, onClick }: ContetnCollapseProps) => {
  const LeftIconComponent = Icon[leftIcon];
  return (
    <div className={styles.contentCollapseContainer}>
      <button className={styles.collapseButtonBox} onClick={onClick}>
        <LeftIconComponent aria-hidden />
        {text}
      </button>
    </div>
  );
};

export default ContentCollapse;

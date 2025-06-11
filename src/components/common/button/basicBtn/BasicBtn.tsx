import Icon from '@assets/svgs';

import * as styles from './basicBtn.css';

interface ButtonProps {
  variant?: 'primary' | 'grayOutlined' | 'blackOutlined' | 'lightGrayOutlined' | 'green';
  size?: 'large' | 'medium' | 'small';
  label: string;
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  onClick?: () => void;
  onRightIconClick?: () => void;
  isActive?: boolean;
}

const BasicBtn = ({
  variant = 'primary',
  size = 'medium',
  label,
  leftIcon,
  rightIcon,
  onClick,
  onRightIconClick,
  isActive = false,
}: ButtonProps) => {
  const SelectedLeftIcon = leftIcon ? Icon[leftIcon] : null;
  const SelectedRightIcon = rightIcon ? Icon[rightIcon] : null;

  return (
    <button
      className={styles.buttonStyle({ color: variant, size, active: isActive ? true : false })}
      onClick={onClick}>
      {SelectedLeftIcon && (
        <span className={styles.iconWrapper}>
          <SelectedLeftIcon />
        </span>
      )}
      <p>{label}</p>
      {SelectedRightIcon && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onRightIconClick?.();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onRightIconClick?.();
            }
          }}
          className={styles.iconWrapper}>
          <SelectedRightIcon />
        </span>
      )}
    </button>
  );
};

export default BasicBtn;

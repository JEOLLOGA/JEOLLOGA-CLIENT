import Icon from '@assets/svgs';
import buttonStyle from '@components/common/button/basicBtn/basicBtn.css';

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
      className={buttonStyle({ color: variant, size, active: isActive ? true : false })}
      onClick={onClick}>
      {SelectedLeftIcon && <SelectedLeftIcon />}
      <p>{label}</p>
      {SelectedRightIcon && (
        <button
          onClick={
            onRightIconClick &&
            ((e) => {
              e.stopPropagation();
              onRightIconClick();
            })
          }>
          <SelectedRightIcon />
        </button>
      )}
    </button>
  );
};

export default BasicBtn;

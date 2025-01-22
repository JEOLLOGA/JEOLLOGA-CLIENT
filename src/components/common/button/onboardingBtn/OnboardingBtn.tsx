import Icon from '@assets/svgs';

import { OnboardingBtnStyle, btnContentStyle } from './onboardingBtn.css';

interface OnboardingBtnProps {
  btnText: string;
  isActive?: boolean;
  leftIcon?: keyof typeof Icon;
  onClick?: () => void;
}

const OnboardingBtn = ({ btnText, leftIcon, isActive = false, onClick }: OnboardingBtnProps) => {
  const SelectedLeftIcon = leftIcon ? Icon[leftIcon] : null;

  return (
    <button className={OnboardingBtnStyle({ active: isActive ? true : false })} onClick={onClick}>
      <div className={btnContentStyle}>
        {SelectedLeftIcon && <SelectedLeftIcon />}
        <p>{btnText}</p>
      </div>
    </button>
  );
};

export default OnboardingBtn;

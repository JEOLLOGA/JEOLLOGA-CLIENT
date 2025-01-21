import OnboardingBtn from '@components/common/button/onboardingBtn/OnboardingBtn';

interface ExperienceBtnProps {
  btnText: string;
  optionType: '있음' | '없음';
  isActive?: boolean;
  onClick?: () => void;
}

const ExperienceBtn = ({ btnText, optionType, isActive = false, onClick }: ExperienceBtnProps) => {
  const leftIcon = optionType === '있음' ? 'IcnO' : 'IcnX';

  return (
    <OnboardingBtn btnText={btnText} isActive={isActive} leftIcon={leftIcon} onClick={onClick} />
  );
};

export default ExperienceBtn;

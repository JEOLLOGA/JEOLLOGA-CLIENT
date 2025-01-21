import OnboardingBtn from '@components/common/button/onboardingBtn/OnboardingBtn';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import React, { ReactNode } from 'react';

import ExperienceBtn from './ExperienceBtn';
import * as styles from './onboardingSection.css';

interface OnboardingSectionProps {
  id: string;
  title: ReactNode;
  description: string;
  options?: string[];
  isNextDisabledInitially?: boolean;
  selectedOption: string | null;
  onSelectionChange?: (selected: string | null) => void;
  onNextClick: () => void;
}

const OnboardingSection = ({
  id,
  title,
  description,
  options,
  isNextDisabledInitially = true,
  selectedOption,
  onSelectionChange,
  onNextClick,
}: OnboardingSectionProps) => {
  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      onSelectionChange?.(null);
    } else {
      onSelectionChange?.(option);
    }
  };

  const isNextDisabled = isNextDisabledInitially && !selectedOption;

  return (
    <div className={styles.container}>
      <div className={styles.titleLayout}>
        <h1 className={styles.titleStyle}>{title}</h1>
        <p className={styles.descriptionStyle}>{description}</p>
      </div>
      <div>
        {options && (
          <div className={styles.selectContainer}>
            {options.map((option) =>
              id === '이용경험' ? (
                <ExperienceBtn
                  key={option}
                  btnText={option}
                  optionType={option as '있음' | '없음'}
                  isActive={selectedOption === option}
                  onClick={() => handleOptionClick(option)}
                />
              ) : (
                <OnboardingBtn
                  key={option}
                  btnText={option}
                  isActive={selectedOption === option}
                  onClick={() => handleOptionClick(option)}
                />
              ),
            )}
          </div>
        )}
      </div>
      <PageBottomBtn
        btnText="다음"
        size="large"
        isDisabled={isNextDisabled}
        onClick={onNextClick}
      />
    </div>
  );
};

export default OnboardingSection;

import Icon from '@assets/svgs';
import React from 'react';

import * as ProgressBarStyle from './progressBar.css';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onBackClick: () => void;
}

const ProgressBar = ({ currentStep, totalSteps, onBackClick }: ProgressBarProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className={ProgressBarStyle.container}>
      {currentStep > 1 ? (
        <button className={ProgressBarStyle.backButton} onClick={onBackClick}>
          <Icon.IcnArrowBlackLeft />
        </button>
      ) : (
        <div className={ProgressBarStyle.emptyBox} />
      )}
      <div className={ProgressBarStyle.barContainer}>
        <div
          className={ProgressBarStyle.barStyle}
          style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

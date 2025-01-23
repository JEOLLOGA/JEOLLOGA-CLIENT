import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import { WELCOME_TEXT } from '@constants/onboarding/onboardingSteps';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './welcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [userName] = useState<string>('');

  const handleStart = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.titleStyle}>{`${userName}${WELCOME_TEXT}`}</h1>
      <div className={styles.lottieStyle}>
        <dotlottie-player src="src/assets/lotties/onboarding.lottie" autoplay loop />
      </div>
      <PageBottomBtn btnText="절로가 시작하기" size="large" onClick={handleStart} />
    </div>
  );
};

export default WelcomePage;

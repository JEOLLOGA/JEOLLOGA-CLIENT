import { useGetNickname } from '@apis/user';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { WELCOME_TEXT } from '@constants/onboarding/onboardingSteps';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './welcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem('userId'));
  const { data, isLoading } = useGetNickname(userId);

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  const handleStart = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.titleStyle}>{`${data?.nickname}${WELCOME_TEXT}`}</h1>
      <div className={styles.lottieStyle}>
        <dotlottie-player key="onboarding" src="/lotties/onboarding.lottie" autoplay loop />
      </div>
      <PageBottomBtn btnText="절로가 시작하기" size="large" onClick={handleStart} />
    </div>
  );
};

export default WelcomePage;

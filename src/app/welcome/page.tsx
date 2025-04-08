'use client';

import { useGetNickname } from '@apis/user';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import LottiePlayer from '@components/common/lottie/LottiePlayer';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { WELCOME_TEXT } from '@constants/onboarding/onboardingSteps';
import { useRouter } from 'next/navigation';
import React from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './welcomePage.css';

const WelcomePage = () => {
  const router = useRouter();
  const userId = Number(localStorage.getItem('userId'));
  const { data, isLoading } = useGetNickname(userId);
  const { logClickEvent } = useEventLogger('onboarding_end');

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  const handleStart = () => {
    router.push('/');

    logClickEvent('click_start');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titleStyle}>{`${data?.nickname}${WELCOME_TEXT}`}</h1>
      <div className={styles.lottieStyle}>
        <LottiePlayer keyId="onboarding" src="/lotties/onboarding.lottie" />
      </div>
      <PageBottomBtn btnText="절로가 시작하기" size="large" onClick={handleStart} />
    </div>
  );
};

export default WelcomePage;

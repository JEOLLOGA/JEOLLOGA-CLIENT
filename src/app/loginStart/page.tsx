'use client';

import Icon from '@assets/svgs';
import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import LottiePlayer from '@components/common/lottie/LottiePlayer';
import React from 'react';

import * as styles from './style.css';

const ModalLoginPage = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.textBox}>
        <Icon.Logo />
        <p className={styles.textStyle}>템플스테이를 만나는 가장 쉬운 방법</p>
      </div>
      <div className={styles.lottieStyle}>
        <LottiePlayer keyId="onboarding" src="/lotties/onboarding.lottie" />
      </div>
      <KakaoBtn />
    </div>
  );
};

export default ModalLoginPage;

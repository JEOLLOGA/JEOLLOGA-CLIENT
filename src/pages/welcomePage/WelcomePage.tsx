import { fetchUserNickname } from '@apis/user/axios';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import { WELCOME_TEXT } from '@constants/onboarding/onboardingSteps';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './welcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const userId = Number(localStorage.getItem('userId') || '');
    if (userId) {
      fetchUserNickname(userId).then((data) => setUserName(data.nickname));
    }
  }, []);

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

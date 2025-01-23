import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import PageName from '@components/common/pageName/PageName';
import LOGIN_INFOS from '@constants/loginInfos';
import React from 'react';
import { useLocation } from 'react-router-dom';

import * as styles from './loginPage.css';

type LoginType = 'my' | 'wish';

const LoginPage = () => {
  const location = useLocation();

  const type: LoginType = location.state?.type || 'my';

  const { title, text, lottie } = LOGIN_INFOS[type];

  return (
    <section className={styles.loginWrapper}>
      <PageName title={title} isLikeBtn={false} />
      <div className={styles.contentWrapper}>
        <h2 className={styles.textStyle}>{text}</h2>

        <dotlottie-player
          src={lottie}
          autoplay
          loop
          style={{ width: '27rem', height: '28.8rem' }}
        />
      </div>
      <KakaoBtn />
    </section>
  );
};

export default LoginPage;

'use client';

import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import LottiePlayer from '@components/common/lottie/LottiePlayer';
import PageName from '@components/common/pageName/PageName';
import LOGIN_INFOS from '@constants/loginInfos';
import { useSearchParams } from 'next/navigation';

import * as styles from './loginPage.css';

type LoginType = 'my' | 'wish';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const isPrivateParam = searchParams.get('isPrivate');

  const type: LoginType = typeParam === 'my' ? 'my' : 'wish';
  const isPrivate = isPrivateParam === 'true';

  const { title, text, lottie } = LOGIN_INFOS[type];

  return (
    <section className={styles.loginWrapper}>
      <PageName title={title} isPrivate={isPrivate} />
      <div className={styles.contentWrapper}>
        <h2 className={styles.textStyle}>{text}</h2>

        <LottiePlayer keyId={type} src={lottie} style={{ width: '27rem', height: '28.8rem' }} />
      </div>
      <KakaoBtn />
    </section>
  );
};

export default LoginPage;

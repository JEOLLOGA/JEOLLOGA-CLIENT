import Icon from '@assets/svgs';
import loginBtn from '@components/common/button/kakaoBtn/kakaoBtn.css';
import React from 'react';

const KakaoBtn = () => {
  const handleLogin = () => {
    window.location.href = 'http://127.0.0.1:8080/oauth2/authorization/kakao';
  };

  return (
    <button className={loginBtn} onClick={handleLogin}>
      <Icon.IcnKakaoLogo />
      카카오로 3초 만에 시작하기
    </button>
  );
};

export default KakaoBtn;

import Icon from '@assets/svgs';
import loginBtn from '@components/common/button/kakaoBtn/kakaoBtn.css';

const KakaoBtn = () => {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      process.env.NEXT_PUBLIC_REST_API_KEY
    }&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
  };

  return (
    <button className={loginBtn} onClick={handleLogin}>
      <Icon.IcnKakaoLogo />
      카카오로 3초 만에 시작하기
    </button>
  );
};

export default KakaoBtn;

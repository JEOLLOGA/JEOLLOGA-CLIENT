import Icon from '@assets/svgs';
import loginBtn from '@components/common/button/kakaoBtn/kakaoBtn.css';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

const KakaoBtn = () => {
  const { logClickEvent } = useEventLogger('login_wish_page');

  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

    logClickEvent('click_login');
  };

  return (
    <button className={loginBtn} onClick={handleLogin}>
      <Icon.IcnKakaoLogo />
      카카오로 3초 만에 시작하기
    </button>
  );
};

export default KakaoBtn;

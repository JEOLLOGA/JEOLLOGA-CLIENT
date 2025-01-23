import { getKakaoLogin, postLogout } from '@apis/auth/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useGetKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (authCode: string) => getKakaoLogin(authCode),
    onSuccess: (response) => {
      const userId = response.data.userId;
      const accessToken = response.headers['authorization'].replace('Bearer ', '');
      const refreshToken = response.headers['refreshtoken'];
      const userNickname = response.data.nickname;

      localStorage.setItem('userId', userId);
      localStorage.setItem('Authorization', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      if (!userNickname) navigate('/onboarding');
      else navigate('/');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePostLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      navigate('/');
      localStorage.clear();
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

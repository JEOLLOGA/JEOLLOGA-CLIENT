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

      if (userId) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('Authorization', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const usePostLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      localStorage.removeItem('Authorization');
      navigate('/');
    },

    onError: (error) => {
      console.log(error);
    },
  });
};

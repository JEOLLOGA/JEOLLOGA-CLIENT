import getKakaoLogin from '@apis/login/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useGetKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (authCode: string) => getKakaoLogin(authCode),
    onSuccess: (response) => {
      const userId = response.data.userId;
      const accessToken = response.headers['authorization'].replace('Bearer ', '');
      const refreshToken = response.headers['refreshtoken'];

      if (userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('Authorization', JSON.stringify(accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useGetKakaoLogin;

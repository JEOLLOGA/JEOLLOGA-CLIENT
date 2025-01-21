import getKakaoLogin from '@apis/login/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useGetKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (authCode: string) => getKakaoLogin(authCode),
    onSuccess: (response) => {
      const userId = response.id;
      if (userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useGetKakaoLogin;

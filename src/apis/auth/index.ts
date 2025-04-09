import { postKakaoLogin, postLogout, postWithdraw } from '@apis/auth/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostKakaoLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ code, redirectUri }: { code: string; redirectUri: string }) =>
      postKakaoLogin(code, redirectUri),
    onSuccess: (response) => {
      const userId = response.data.userId;
      const accessToken = response.headers['authorization'].replace('Bearer ', '');
      const refreshToken = response.headers['refreshtoken'];
      const userNickname = response.data.nickname;

      localStorage.setItem('userId', userId);
      localStorage.setItem('Authorization', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.removeItem('searchKeyword');

      if (!userNickname) {
        router.push('/onboarding');
      } else {
        router.push('/');
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePostLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      localStorage.clear();
      router.push('/');
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePostWithdraw = ({ userId }: { userId: number | null }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      if (!userId) throw new Error('Invalid userId');
      return await postWithdraw(userId);
    },
    onSuccess: () => {
      localStorage.clear();
      router.push('/');
      window.location.reload();
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

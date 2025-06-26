import { getKakaoLogin, postLogout, postWithdraw } from '@apis/auth/axios';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export const useGetKakaoLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ code }: { code: string }) => getKakaoLogin(code),
    onSuccess: (response) => {
      const userId = response.data.data.userId;
      const userNickname = response.data.data.nickname;

      setCookie('userId', userId, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 1209600, // 14일
      });

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

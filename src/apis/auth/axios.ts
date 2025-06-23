import instance, { privateInstance } from '@apis/instance';

export const postKakaoLogin = async (code: string) => {
  const res = await instance.get(`v2/auth/login?code=${encodeURIComponent(code)}`);

  return res;
};

export const postLogout = async () => {
  const res = await privateInstance.post('/logout');

  return res;
};

export const postWithdraw = async (userId: number | null) => {
  const res = await instance.post('/login/unlink', {
    userId: userId,
  });

  return res;
};

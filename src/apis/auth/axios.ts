import instance, { privateInstance } from '@apis/instance';

export const postKakaoLogin = async (code: string, redirectUri: string) => {
  const res = await instance.post('/login', {
    code: code,
    redirectUri: redirectUri,
  });

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

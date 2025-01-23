import instance, { privateInstance } from '@apis/instance';

export const getKakaoLogin = async (code: string) => {
  const res = await instance.get('/login', {
    params: {
      code: code,
    },
  });

  return res;
};

export const postLogout = async () => {
  const res = await privateInstance.post('/logout');

  return res;
};

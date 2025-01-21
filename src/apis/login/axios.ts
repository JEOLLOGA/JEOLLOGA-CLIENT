import instance from '@apis/instance';

const getKakaoLogin = async (code: string) => {
  const res = await instance.get('/login', {
    params: {
      code: code,
    },
  });

  return res.data;
};

export default getKakaoLogin;

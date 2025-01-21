import { privateInstance } from '@apis/instance';

const getMyPage = async (userId: string | null) => {
  const res = await privateInstance.get('/user/mypage', {
    params: { userId },
  });
  return res.data;
};

export default getMyPage;

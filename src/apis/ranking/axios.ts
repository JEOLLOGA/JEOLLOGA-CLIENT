import { privateInstance } from '@apis/instance';

const getRanking = async (userId?: number) => {
  const res = await privateInstance.get('/ranking', {
    params: { userId },
  });
  return res.data;
};

export default getRanking;

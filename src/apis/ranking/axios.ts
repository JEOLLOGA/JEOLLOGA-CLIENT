import { privateInstance } from '@apis/instance';

const getRanking = async (userId: number | null) => {
  const res = await privateInstance.get('/ranking', {
    params: { userId },
  });
  return res.data;
};

export default getRanking;

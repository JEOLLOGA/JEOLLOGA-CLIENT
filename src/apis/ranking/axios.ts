import { privateInstance } from '@apis/instance';

const getRanking = async (userId: string | null) => {
  const res = await privateInstance.get('/ranking', {
    params: { userId },
  });
  return res.data;
};

export default getRanking;

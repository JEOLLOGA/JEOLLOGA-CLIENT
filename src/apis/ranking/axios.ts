import { getAxiosInstance } from '@apis/instance';

const getRanking = async (userId: number | null) => {
  const axiosInstance = getAxiosInstance();

  const res = await axiosInstance.get('/ranking', {
    params: { userId },
  });
  return res.data;
};

export default getRanking;

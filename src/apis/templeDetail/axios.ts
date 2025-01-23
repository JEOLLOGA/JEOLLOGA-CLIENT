import { getAxiosInstance } from '@apis/instance';

const getTempleDetails = async (templestayId: string, userId?: string) => {
  const axiosInstance = getAxiosInstance();
  const res = await axiosInstance.get('/templestay', {
    params: { templestayId, userId },
  });

  return res.data;
};

export default getTempleDetails;

import { privateInstance } from '@apis/instance';

const getTempleDetails = async (templestayId: string | null, userId: string | null) => {
  const res = await privateInstance.get('/templestay', {
    params: { templestayId, userId },
  });

  return res.data;
};

export default getTempleDetails;

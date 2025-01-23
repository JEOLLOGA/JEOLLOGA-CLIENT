import instance from '@apis/instance';

const getTempleDetails = async (templestayId: string, userId: string) => {
  const res = await instance.get('/templestay', {
    params: { templestayId, userId },
  });

  return res.data;
};

export default getTempleDetails;

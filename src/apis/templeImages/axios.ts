import instance from '@apis/instance';

const getTempleImages = async (templestayId: string | null) => {
  const res = await instance.get('/public/templestay/img', {
    params: { templestayId },
  });
  return res.data;
};

export default getTempleImages;

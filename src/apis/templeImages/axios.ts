import instance from '@apis/instance';

const getTempleImages = async (templestayId: string) => {
  const res = await instance.get('/public/templestay/img', {
    params: { templestayId },
  });
  return res.data;
};

export default getTempleImages;

import instance from '@apis/instance';

export const getTempleDetails = async (templestayId: string, userId?: string) => {
  const res = await instance.get('/templestay', {
    params: { templestayId, userId },
  });

  return res.data;
};

export const getTempleImages = async (templestayId: string) => {
  const res = await instance.get('/public/templestay/img', {
    params: { templestayId },
  });
  return res.data;
};

export const getTempleReviews = async (templestayId: string, page: number) => {
  const res = await instance.get('/public/templestay/reviews', {
    params: { templestayId, page },
  });
  return res.data;
};

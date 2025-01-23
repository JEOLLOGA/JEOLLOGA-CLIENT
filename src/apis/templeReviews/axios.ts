import instance from '@apis/instance';

const getTempleReviews = async (templestayId: string, page: number) => {
  const res = await instance.get('/public/templestay/reviews', {
    params: { templestayId, page },
  });
  return res.data;
};

export default getTempleReviews;

// get axios 정의
import { privateInstance } from '@apis/instance';
import { RankingResponse } from '@apis/ranking/type';

const getRanking = async (userId?: number): Promise<RankingResponse[]> => {
  const res = await privateInstance.get('/ranking', {
    params: { userId },
  });
  return res.data.data.ranking;
};

export default getRanking;

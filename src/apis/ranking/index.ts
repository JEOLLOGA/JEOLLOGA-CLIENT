import getRanking from '@apis/ranking/axios';
import { RankingResponse } from '@apis/ranking/type';
import { useQuery } from '@tanstack/react-query';

const useGetRanking = (userId: number | null) => {
  const { data, isLoading, isError } = useQuery<RankingResponse>({
    queryKey: ['ranking', userId],
    queryFn: () => getRanking(userId),
  });

  return { data, isLoading, isError };
};

export default useGetRanking;

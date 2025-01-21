import getRanking from '@apis/ranking/axios';
import { RankingResponse } from '@apis/ranking/type';
import { useQuery } from '@tanstack/react-query';

const useGetRanking = (userId: string | null) => {
  const { data, isLoading, isError } = useQuery<RankingResponse>({
    queryKey: ['rankiing', userId],
    queryFn: () => getRanking(userId),
  });

  return { data, isLoading, isError };
};

export default useGetRanking;

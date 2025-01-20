// query 로직

import getRanking from '@apis/ranking/axios';
import { RankingResponse } from '@apis/ranking/type';
import { useQuery } from '@tanstack/react-query';

const useGetRanking = () => {
  const { data, isLoading, isError } = useQuery<RankingResponse[]>({
    queryKey: [],
    queryFn: () => getRanking(),
  });

  return { data, isLoading, isError };
};

export default useGetRanking;

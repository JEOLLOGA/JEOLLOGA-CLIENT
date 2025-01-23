import { useQuery } from '@tanstack/react-query';

import getTempleDetails from './axios';
import { TempleDetail } from './type';

const useGetTempleDetails = (templestayId: string, userId?: string) => {
  const { data, isLoading, isError } = useQuery<TempleDetail>({
    queryKey: ['detailPage', templestayId],
    queryFn: () => getTempleDetails(templestayId, userId),
  });

  return { data, isLoading, isError };
};

export default useGetTempleDetails;

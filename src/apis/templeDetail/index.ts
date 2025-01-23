import { useQuery } from '@tanstack/react-query';

import getTempleDetails from './axios';
import { TempleDetail } from './type';

const useGetTempleDetails = (templestayId: string | null, userId: string | null) => {
  const { data, isLoading, isError } = useQuery<TempleDetail>({
    queryKey: ['detailPage', userId],
    queryFn: () => getTempleDetails(templestayId, userId),
  });

  return { data, isLoading, isError };
};

export default useGetTempleDetails;

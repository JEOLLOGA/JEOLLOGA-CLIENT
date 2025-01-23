import { useQuery } from '@tanstack/react-query';

import getTempleImages from './axios';
import { TemplestayImgsResponse } from './type';

const useGetTempleImages = (templestayId: string) => {
  const { data, isLoading, isError } = useQuery<TemplestayImgsResponse>({
    queryKey: ['images', templestayId],
    queryFn: () => getTempleImages(templestayId),
  });

  return { data, isLoading, isError };
};

export default useGetTempleImages;

import getfilterOptions from '@apis/filter/axios';
import { useQuery } from '@tanstack/react-query';

const useGetFilterOptions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => getfilterOptions(),
  });

  return { data, isLoading };
};

export default useGetFilterOptions;

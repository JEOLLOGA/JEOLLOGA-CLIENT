import { useQuery } from '@tanstack/react-query';

import getMyPage from './axios';
import { MyPage } from './type';

const useGetMyPage = (userId: string | null) => {
  const { data, isLoading, isError } = useQuery<MyPage>({
    queryKey: ['myPage', userId],
    queryFn: () => getMyPage(userId),
  });

  return { data, isLoading, isError };
};

export default useGetMyPage;

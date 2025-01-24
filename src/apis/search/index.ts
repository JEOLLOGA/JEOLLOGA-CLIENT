import { delSearchRecord, delAllSearchRecord, getSearchHistory } from '@apis/search/axios';
import {
  DelSearchRecordType,
  DelAllSearchRecordType,
  SearchHistoryResponse,
} from '@apis/search/type';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

export const useDelSearchRecord = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DelSearchRecordType) => delSearchRecord(data),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ['searchHistory', variables.userId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDelAllSearchRecord = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DelAllSearchRecordType) => delAllSearchRecord(data),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ['searchHistory', variables.userId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetSearchHistory = (userId: number | null) => {
  return useQuery<SearchHistoryResponse>({
    queryKey: ['searchHistory', userId],
    queryFn: () => {
      if (!userId) throw new Error('Invalid userId');
      return getSearchHistory(userId);
    },
    enabled: userId !== null && userId !== 0,
    refetchOnWindowFocus: true, // 창이 다시 활성화되면 데이터 갱신
    staleTime: 0, // 항상 최신 데이터를 가져오기 위함 ,,
  });
};

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
      queryClient.invalidateQueries({ queryKey: [variables.userId] });
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userId'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetSearchHistory = (userId: number | null) => {
  const { data, isLoading, isError } = useQuery<SearchHistoryResponse>({
    queryKey: [userId],
    queryFn: () => getSearchHistory(userId),
  });

  return { data, isLoading, isError };
};

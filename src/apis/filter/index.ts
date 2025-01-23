import { fetchFilteredList } from '@apis/filter/axios';
import { FetchFilteredListProps } from '@apis/filter/type';
import { useMutation } from '@tanstack/react-query';
import queryClient from 'src/queryClient';

const useFetchFilteredList = () => {
  return useMutation({
    mutationFn: ({
      groupedFilters,
      adjustedPrice,
      searchQuery,
      page,
      userId,
    }: FetchFilteredListProps) => {
      return fetchFilteredList(
        { ...groupedFilters, price: adjustedPrice, content: searchQuery },
        page,
        userId,
      );
    },
    onSuccess: (data, { groupedFilters, page, userId }: FetchFilteredListProps) => {
      queryClient.setQueryData(['filteredList', groupedFilters, page, userId], data);
    },
  });
};

export default useFetchFilteredList;

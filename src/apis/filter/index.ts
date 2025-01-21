import { fetchFilteredList, fetchFilteredCount } from '@apis/filter/axios';
import { FilterData } from '@apis/filter/type';
import { useMutation } from '@tanstack/react-query';

export const useFetchFilteredList = () => {
  return useMutation({
    mutationFn: (groupedFilters: FilterData) => {
      const page = 1;
      const userId = 1;
      return fetchFilteredList(groupedFilters, page, userId);
    },
  });
};

export const useFetchFilteredCount = () => {
  return useMutation({
    mutationFn: (groupedFilters: FilterData) => {
      return fetchFilteredCount(groupedFilters);
    },
  });
};

import useFetchFilteredList from '@apis/filter';
import { fetchFilteredCount } from '@apis/filter/axios';
import useLocalStorage from '@hooks/useLocalStorage';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import queryClient from 'src/queryClient';
import { filterListAtom, priceAtom, contentAtom } from 'src/store/store';

const useFilter = () => {
  const [filterListInstance] = useAtom(filterListAtom);
  const [price, setPrice] = useAtom(priceAtom);
  const [content, setContent] = useAtom(contentAtom);

  const navigate = useNavigate();
  const { mutateAsync: fetchFilterLists } = useFetchFilteredList();

  const getAdjustedPrice = () => ({
    minPrice: price.minPrice * 10000,
    maxPrice: price.maxPrice * 10000,
  });

  const getGroupedFilters = () => filterListInstance.getGroupedStates();

  const { data: totalCount } = useQuery({
    queryKey: ['filteredCount', price, content],
    queryFn: async () => {
      const groupedFilters = getGroupedFilters();
      const adjustedPrice = getAdjustedPrice();

      const response = await fetchFilteredCount({
        ...groupedFilters,
        price: adjustedPrice,
        content,
      });

      return response.count;
    },
    staleTime: 0,
    placeholderData: keepPreviousData,
  });

  // 필터 상태 토글
  const toggleFilter = async (filterName: string) => {
    try {
      filterListInstance.toggleStatus(filterName);

      queryClient.invalidateQueries({
        queryKey: ['filteredCount'],
        exact: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getUserId = () => localStorage.getItem('userId') || '';

  const { addStorageValue } = useLocalStorage();

  // 검색 실행 함수
  const handleSearch = async (searchContent?: string, currentPage = 1) => {
    const groupedFilters = getGroupedFilters();
    const searchQuery = searchContent ? searchContent.replace(/\s+/g, '') : content;
    const adjustedPrice = getAdjustedPrice();

    const isLoggedIn = localStorage.getItem('Authorization');

    try {
      const response = await fetchFilterLists({
        groupedFilters,
        adjustedPrice,
        searchQuery,
        page: currentPage,
        userId: getUserId(),
      });

      setContent(searchQuery);

      // 로그인 안 한 사용자의 경우 검색어를 로컬스토리지에 저장
      if (!isLoggedIn && searchQuery.trim() !== '') {
        addStorageValue(searchQuery);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      navigate('/searchResult', {
        state: {
          selectedfilters: groupedFilters,
          content: searchQuery,
          results: response,
          price,
        },
      });
    } catch (error) {
      console.error('Error executing search:', error);
    }
  };

  // 필터 초기화
  const handleResetFilter = async () => {
    filterListInstance.resetAllStates();
    setPrice({ minPrice: 0, maxPrice: 30 });

    queryClient.invalidateQueries({
      queryKey: ['filteredCount'],
      exact: false,
    });
  };

  return {
    price,
    totalCount,
    toggleFilter,
    handleResetFilter,
    handleSearch,
  };
};

export default useFilter;

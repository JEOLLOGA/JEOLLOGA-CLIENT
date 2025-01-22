import { useFetchFilteredList } from '@apis/filter';
import { fetchFilteredCount } from '@apis/filter/axios';
import { useQuery } from '@tanstack/react-query';
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

  const { data: totalCount = 0 } = useQuery({
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
    refetchOnWindowFocus: true,
    refetchOnMount: true,
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

  // 검색 실행 함수
  const handleSearch = async (searchContent?: string, currentPage = 1) => {
    const groupedFilters = getGroupedFilters();
    const searchQuery = searchContent || content;
    const adjustedPrice = getAdjustedPrice();

    console.log('Search query:', searchQuery, 'Page:', currentPage, 'Price:', adjustedPrice);

    try {
      const response = await fetchFilterLists({
        ...groupedFilters,
        price: adjustedPrice,
        content: searchQuery,
      });

      setContent(searchQuery);

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
      console.error(error);
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

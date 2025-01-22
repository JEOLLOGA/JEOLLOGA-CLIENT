import { useFetchFilteredList, useFetchFilteredCount } from '@apis/filter';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterListAtom, priceAtom, contentAtom } from 'src/store/store';

const useFilter = () => {
  const [filterListInstance] = useAtom(filterListAtom);
  const [price, setPrice] = useAtom(priceAtom);
  const [content] = useAtom(contentAtom);

  const [filtersState, setFiltersState] = useState(filterListInstance.getAllStates());
  const [totalCount, setTotalCount] = useState(0);

  const { mutateAsync: fetchFilterLists } = useFetchFilteredList();
  const { mutateAsync: fetchFilterCount } = useFetchFilteredCount();

  const toggleFilter = async (filterName: string) => {
    try {
      filterListInstance.toggleStatus(filterName);

      const updatedState = filterListInstance.getAllStates();
      setFiltersState(updatedState);

      await getFilterCount();
    } catch (error) {
      console.error(error);
    }
  };

  const getFilterCount = async () => {
    const groupedFilters = filterListInstance.getGroupedStates();

    const response = await fetchFilterCount({
      ...groupedFilters,
      price,
    });
    setTotalCount(response.count);
  };

  const navigate = useNavigate();

  const handleSearch = async () => {
    const groupedFilters = filterListInstance.getGroupedStates();

    try {
      const response = await fetchFilterLists({
        ...groupedFilters,
        price,
        content,
      });

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      navigate('/searchResult', {
        state: {
          selectedfilters: groupedFilters,
          content,
          results: response,
          price,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetFilter = async () => {
    filterListInstance.resetAllStates();
    setFiltersState(filterListInstance.getAllStates());
    setPrice({ minPrice: 0, maxPrice: 30 });

    const groupedFilters = filterListInstance.getGroupedStates();

    const response = await fetchFilterCount({
      ...groupedFilters,
      price: { minPrice: 0, maxPrice: 30 },
    });
    setTotalCount(response.count);
  };

  return {
    filtersState,
    price,
    totalCount,
    toggleFilter,
    handleResetFilter,
    handleSearch,
    getFilterCount,
  };
};

export default useFilter;

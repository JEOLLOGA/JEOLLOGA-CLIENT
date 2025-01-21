import { useFetchFilteredList, useFetchFilteredCount } from '@apis/filter';
import FILTERS from '@constants/filters';
import { useCallback, useMemo, useState } from 'react';
import FilterList from 'src/model/filter/filterList';

const useFilter = () => {
  const filterListInstance = useMemo(() => new FilterList(FILTERS), []);
  const [filtersState, setFiltersState] = useState(filterListInstance.getAllStates());
  const [price, setPrice] = useState({ minPrice: 0, maxPrice: 30 });
  const [totalCount, setTotalCount] = useState(0);

  const { mutate: fetchFilterLists } = useFetchFilteredList();
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

  const updatePrice = useCallback((min: number, max: number) => {
    setPrice({ minPrice: min, maxPrice: max });
  }, []);

  const handleClickSubmit = () => {
    const groupedFilters = filterListInstance.getGroupedStates();
    fetchFilterLists({
      ...groupedFilters,
      price,
    });
  };

  const handleResetFilter = async () => {
    filterListInstance.resetAllStates();
    setFiltersState(filterListInstance.getAllStates());
    setPrice({ minPrice: 0, maxPrice: 30 });

    await getFilterCount();
  };

  return {
    filtersState,
    price,
    totalCount,
    toggleFilter,
    updatePrice,
    handleResetFilter,
    handleClickSubmit,
  };
};

export default useFilter;

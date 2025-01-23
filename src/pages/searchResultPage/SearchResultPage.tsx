import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import SearchCardList from '@components/card/templeStayCard/searchCardList/SearchCardList';
import SearchEmpty from '@components/common/empty/searchEmpty/SearchEmpty';
import Pagination from '@components/common/pagination/Pagination';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import useFilter from '@hooks/useFilter';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { filterListAtom } from 'src/store/store';

import * as styles from './searchResultPage.css';

const SearchResultPage = () => {
  const location = useLocation();
  const { results, content, price } = location.state || {};
  const userId = Number(localStorage.getItem('userId'));

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  useEffect(() => {
    if (results) {
      setTemplestays(results.templestays);
      setCurrentPage(results.page);
      setSearchText(content);
    }
  }, [results, content]);

  const [currentPage, setCurrentPage] = useState(results.page);
  const [templestays, setTemplestays] = useState(results.templestays);
  const [searchText, setSearchText] = useState(content);
  const { handleSearch } = useFilter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleSearch(searchText, page);
  };

  const filterInstance = useAtomValue(filterListAtom);
  const isPriceChanged = price.minPrice !== 0 || price.maxPrice !== 30;

  const activeFilters = [
    ...filterInstance.getFilteredGroups(),
    ...(isPriceChanged ? ['price'] : []),
  ];

  const handleToggleWishlist = (templestayId: number, liked: boolean) => {
    if (liked) {
      removeWishlistMutation.mutate({ userId, templestayId });
    } else {
      addWishlistMutation.mutate({ userId, templestayId });
    }
  };

  const prevPath = localStorage.getItem('prevPage') || '';

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <SearchHeader searchText={searchText} prevPath={prevPath} />
        <FilterTypeBox activeFilters={activeFilters} />
      </div>
      {templestays.length === 0 ? (
        <SearchEmpty text={searchText} />
      ) : (
        <div className={styles.bodyContainer}>
          <SearchCardList
            data={templestays}
            layout="horizontal"
            onToggleWishlist={handleToggleWishlist}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={results.totalPages}
            onPageChange={handlePageChange}
            color="white"
          />
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;

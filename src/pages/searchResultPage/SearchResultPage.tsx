import SearchCardList from '@components/card/templeStayCard/searchCardList/SearchCardList';
import SearchEmpty from '@components/common/empty/searchEmpty/SearchEmpty';
import Pagination from '@components/common/pagination/Pagination';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { filterListAtom } from 'src/store/store';

import * as styles from './searchResultPage.css';

const SearchResultPage = () => {
  const location = useLocation();
  const { results, content, price } = location.state || {};

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filterInstance = useAtomValue(filterListAtom);
  const isPriceChanged = price.minPrice !== 0 || price.maxPrice !== 30;

  const activeFilters = [
    ...filterInstance.getFilteredGroups(),
    ...(isPriceChanged ? ['price'] : []),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <SearchHeader searchText={searchText} />
        <FilterTypeBox activeFilters={activeFilters} />
      </div>
      {templestays.length === 0 ? (
        <SearchEmpty text={searchText} />
      ) : (
        <div className={styles.bodyContainer}>
          <SearchCardList data={templestays} layout="horizontal" />
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

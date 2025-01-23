import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import SearchCardList from '@components/card/templeStayCard/searchCardList/SearchCardList';
import SearchEmpty from '@components/common/empty/searchEmpty/SearchEmpty';
import ModalContainer from '@components/common/modal/ModalContainer';
import Pagination from '@components/common/pagination/Pagination';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import useFilter from '@hooks/useFilter';
import { useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { filterListAtom } from 'src/store/store';

import * as styles from './searchResultPage.css';

const SearchResultPage = () => {
  const location = useLocation();
  const { results, content, price } = location.state || {};
  const userId = Number(localStorage.getItem('userId'));
  const queryClient = useQueryClient();

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  useEffect(() => {
    if (results) {
      setTemplestays(results.templestays);
      setCurrentPage(results.page);
      setSearchText(content);
    }
  }, [results, content]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(results.page);
  const [templestays, setTemplestays] = useState(results.templestays);
  const [searchText, setSearchText] = useState(content);
  const { handleSearch } = useFilter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    const mutation = liked ? removeWishlistMutation : addWishlistMutation;
    mutation.mutate(
      { userId, templestayId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['ranking', userId] });
          queryClient.refetchQueries({ queryKey: ['ranking', userId] });
        },
      },
    );
  };

  const prevPath = localStorage.getItem('prevPage') || '';

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <ModalContainer
          modalTitle="로그인 하시겠어요?"
          modalBody="찜하려면 로그인이 필요해요."
          isOpen={isModalOpen}
          handleClose={closeModal}
          handleSubmit={() => (window.location.href = '/login')}
          leftBtnLabel="취소"
          rightBtnLabel="로그인하기"
        />
      )}

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
            onRequireLogin={openModal}
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

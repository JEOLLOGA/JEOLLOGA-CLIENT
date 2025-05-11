'use client';
import { useAddWishlist, useRemoveWishlist } from '@apis/wish';
import SearchCardList from '@components/card/templeStayCard/searchCardList/SearchCardList';
import SearchEmpty from '@components/common/empty/searchEmpty/SearchEmpty';
import ModalContainer from '@components/common/modal/ModalContainer';
import Pagination from '@components/common/pagination/Pagination';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import SearchHeader from '@components/search/searchHeader/SearchHeader';
import useFilter from '@hooks/useFilter';
import { getStorageValue } from '@hooks/useLocalStorage';
import useNavigateTo from '@hooks/useNavigateTo';
import { useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';
import { filterListAtom } from 'src/store/store';

import * as styles from './searchResultPage.css';

const SearchResultPage = () => {
  const navigateToLogin = useNavigateTo('/loginStart');

  const searchParams = useSearchParams();
  const content = searchParams.get('content') ?? '';
  const page = Number(searchParams.get('page') ?? '1');
  const minPrice = Number(searchParams.get('minPrice') ?? '0');
  const maxPrice = Number(searchParams.get('maxPrice') ?? '30');
  const userId = Number(getStorageValue('userId'));
  const queryClient = useQueryClient();
  const [totalPages, setTotalPages] = useState(1);

  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const { logClickEvent } = useEventLogger('modal_login_wish');

  useEffect(() => {
    const fetchSearchResults = async () => {
      const results = await handleSearch(content, page);

      if (results) {
        setTemplestays(results.templestays);
        setTotalPages(results.totalPages);
        setCurrentPage(results.page);
        setSearchText(content);
      }
    };

    fetchSearchResults();
  }, [searchParams.toString()]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const [templestays, setTemplestays] = useState([]);
  const [searchText, setSearchText] = useState(content);
  const { handleSearch } = useFilter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    logClickEvent('click_cancel');
  };

  const handleLogin = () => {
    navigateToLogin();
    logClickEvent('click_login');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleSearch(searchText, page);
  };

  const filterInstance = useAtomValue(filterListAtom);
  const isPriceChanged = minPrice !== 0 || maxPrice !== 30;

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

  const prevPath = getStorageValue('prevPage') || '';

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <ModalContainer
          modalTitle="로그인 하시겠어요?"
          modalBody="찜하려면 로그인이 필요해요."
          isOpen={isModalOpen}
          handleClose={closeModal}
          handleSubmit={handleLogin}
          leftBtnLabel="취소"
          rightBtnLabel="로그인하기"
        />
      )}

      <div className={styles.headerContainer}>
        <SearchHeader searchText={searchText} prevPath={prevPath} />
        <FilterTypeBox activeFilters={activeFilters} />
      </div>
      {templestays.length === 0 ? (
        <div className={styles.emptyContainer}>
          <SearchEmpty text={searchText} />
        </div>
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
            totalPages={totalPages}
            onPageChange={handlePageChange}
            color="white"
          />
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;

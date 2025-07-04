'use client';

import { useWishlistQuery, useAddWishlist, useRemoveWishlist } from '@apis/wish';
import WishCardList from '@components/card/templeStayCard/wishCardList/WishCardList';
import WishEmpty from '@components/common/empty/wishEmpty/WishEmpty';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { getStorageValue } from '@hooks/useLocalStorage';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import * as styles from './wishList.css';

const WishListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const userId = Number(getStorageValue('userId'));
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useWishlistQuery(currentPage, userId);
  const addWishlistMutation = useAddWishlist();
  const removeWishlistMutation = useRemoveWishlist();

  const wishlist = data?.wishlist || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    if (!isLoading && data) {
      if (totalPages > 0 && currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    }
  }, [isLoading, data, currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleToggleWishlist = (templestayId: number, liked: boolean) => {
    if (liked) {
      removeWishlistMutation.mutate(
        { userId, templestayId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['ranking', userId] });
            queryClient.refetchQueries({ queryKey: ['ranking', userId] });
          },
        },
      );
    } else {
      addWishlistMutation.mutate(
        { userId, templestayId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['ranking', userId] });
            queryClient.refetchQueries({ queryKey: ['ranking', userId] });
          },
        },
      );
    }
  };

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }
  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <PageName title="위시리스트" />
      </div>
      {totalPages === 1 && wishlist.length === 0 ? (
        <div className={styles.emptyBox}>
          <WishEmpty />
        </div>
      ) : (
        <>
          <div className={styles.contentBox}>
            <WishCardList
              data={wishlist}
              layout="vertical"
              onToggleWishlist={handleToggleWishlist}
            />
          </div>
          <Pagination
            currentPage={data?.page || 1}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            color="gray"
          />
        </>
      )}
    </div>
  );
};

export default WishListPage;

import { useWishlistQuery, useAddWishlist, useRemoveWishlist } from '@apis/wish';
import WishCardList from '@components/card/templeStayCard/wishCardList/WishCardList';
import WishEmpty from '@components/common/empty/wishEmpty/WishEmpty';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useEffect, useState } from 'react';

import container from './wishListPage.css';

const WishListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const userId = Number(localStorage.getItem('userId'));

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
      removeWishlistMutation.mutate({ userId, templestayId });
    } else {
      addWishlistMutation.mutate({ userId, templestayId });
    }
  };

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }
  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  return (
    <div className={container}>
      <PageName title="위시리스트" isLikeBtn={false} />
      {totalPages === 1 && wishlist.length === 0 ? (
        <WishEmpty />
      ) : (
        <>
          <div>
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

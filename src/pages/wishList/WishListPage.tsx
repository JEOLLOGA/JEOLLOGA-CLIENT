import useWishlistQuery from '@apis/wish';
import WishCardList from '@components/card/templeStayCard/wishCardList/WishCardList';
import WishEmpty from '@components/common/empty/wishEmpty/WishEmpty';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useState } from 'react';

import container from './wishListPage.css';

const WishListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const userId = Number(localStorage.getItem('userId'));

  const { data, isLoading, isError } = useWishlistQuery(currentPage, userId);

  const wishlist = data?.wishlist || [];
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      {wishlist.length === 0 ? (
        <WishEmpty />
      ) : (
        <>
          <div>
            <WishCardList data={wishlist} layout="vertical" />
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

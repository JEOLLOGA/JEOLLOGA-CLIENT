import WishCardList from '@components/card/templeStayCard/wishCardList/WishCardList';
import WishEmpty from '@components/common/empty/wishEmpty/WishEmpty';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import React, { useState } from 'react';

import container from './wishListPage.css';

const mockData = {
  page: 3,
  pageSize: 10,
  totalPages: 13,
  wishlist: [
    {
      id: 1,
      templeName: '대원사(보성)',
      templestayName: '차 한 잔의 행복',
      tag: '탱투가 다녀간',
      region: '전남',
      type: '휴식형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 2,
      templeName: '수원사',
      templestayName: '지금 행복하기',
      tag: '연예인이 다녀간',
      region: '경기',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 3,
      templeName: '봉은사',
      templestayName: '명상 차담 템플스테이',
      tag: '연예인이 다녀간',
      region: '서울',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 4,
      templeName: '대원사(보성)',
      templestayName: '차 한 잔의 행복',
      tag: '탱투가 다녀간',
      region: '전남',
      type: '휴식형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 5,
      templeName: '수원사',
      templestayName: '지금 행복하기',
      tag: '연예인이 다녀간',
      region: '경기',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 6,
      templeName: '봉은사',
      templestayName: '명상 차담 템플스테이',
      tag: '연예인이 다녀간',
      region: '서울',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 7,
      templeName: '대원사(보성)',
      templestayName: '차 한 잔의 행복',
      tag: '탱투가 다녀간',
      region: '전남',
      type: '휴식형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 8,
      templeName: '수원사',
      templestayName: '지금 행복하기',
      tag: '연예인이 다녀간',
      region: '경기',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
    {
      id: 9,
      templeName: '봉은사',
      templestayName: '명상 차담 템플스테이',
      tag: '연예인이 다녀간',
      region: '서울',
      type: '체험형',
      imgUrl: 'https://github.com/user-attachments/assets/e018d4af-d61e-42a1-90d9-96351d653124',
      liked: true,
    },
  ],
};

const WishListPage = () => {
  const [currentPage, setCurrentPage] = useState(mockData.page);
  const [wishlist] = useState(mockData.wishlist);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={container}>
      <PageName title="위시리스트" isLikeBtn={false} />
      {wishlist.length === 0 ? (
        <WishEmpty />
      ) : (
        <>
          <div>
            <WishCardList data={mockData.wishlist} layout="vertical" />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={mockData.totalPages}
            onPageChange={handlePageChange}
            color="gray"
          />
        </>
      )}
    </div>
  );
};

export default WishListPage;

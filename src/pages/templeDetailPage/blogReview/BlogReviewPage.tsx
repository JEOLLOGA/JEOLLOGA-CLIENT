import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import { TEMPLE_REVIEW_DATA } from '@constants/templeDetail';
import { useState } from 'react';

import * as styles from './blogReviewPage.css';

const BlogReviewPage = () => {
  const reviewCount = TEMPLE_REVIEW_DATA.reviews.length;
  const [currentPage, setCurrentPage] = useState(TEMPLE_REVIEW_DATA.page);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.reviewWrapper}>
      <PageName title={`블로그 리뷰 (${reviewCount}개)`} isLikeBtn={false} />
      <div className={styles.reviewComponent}>
        {TEMPLE_REVIEW_DATA.reviews.map((review) => (
          <div key={review.reviewId}>
            <ReviewCard
              reviewTitle={review.reviewTitle}
              reviewLink={review.reviewLink}
              reviewName={review.reviewName}
              reviewDescription={review.reviewDescription}
              reviewDate={review.reviewDate}
              blogImage={review.reviewImgUrl}
              size="large"
            />
          </div>
        ))}
      </div>
      <div className={styles.pageBox}>
        <Pagination
          currentPage={currentPage}
          totalPages={TEMPLE_REVIEW_DATA.totalPages}
          onPageChange={handlePageChange}
          color="gray"
        />
      </div>
    </div>
  );
};

export default BlogReviewPage;

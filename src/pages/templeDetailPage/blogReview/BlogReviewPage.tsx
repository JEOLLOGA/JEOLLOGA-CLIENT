'use client';
import useGetTempleReviews from '@apis/templeReviews';
import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as styles from './blogReviewPage.css';

const BlogReviewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleReviews(String(templestayId), currentPage);

  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  if (!data) {
    return <p>No user information available</p>;
  }

  const reviewCount = data.reviewCount;

  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.headerBox}>
        <PageName title={`블로그 리뷰 (${reviewCount}개)`} />
      </div>
      <div className={styles.reviewComponent}>
        {data.reviews && data.reviews.length > 0 ? (
          data.reviews.map((review) => (
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
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
      <div className={styles.pageBox}>
        <Pagination
          currentPage={data?.page || 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          color="gray"
        />
      </div>
    </div>
  );
};

export default BlogReviewPage;

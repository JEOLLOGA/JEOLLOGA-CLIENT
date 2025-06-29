'use client';
import { templeReviewsQueryOptions } from '@apis/templeInfo/prefetch';
import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import PageName from '@components/common/pageName/PageName';
import Pagination from '@components/common/pagination/Pagination';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import * as styles from './style.css';

interface BlogReviewClientProps {
  templestayId: string;
  initialPage: number;
}

const BlogReviewClient = ({ templestayId, initialPage }: BlogReviewClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data, isLoading, isError } = useQuery(
    templeReviewsQueryOptions(templestayId, currentPage),
  );

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

  useEffect(() => {
    if (currentPage < totalPages) {
      queryClient.prefetchQuery(templeReviewsQueryOptions(templestayId, currentPage + 1));
    }
  }, [currentPage, totalPages, templestayId, queryClient]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());

    const newUrl = `?${params.toString()}`;
    router.push(newUrl, { scroll: false });

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

export default BlogReviewClient;

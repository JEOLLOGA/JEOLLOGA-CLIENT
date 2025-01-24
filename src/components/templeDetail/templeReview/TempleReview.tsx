import useGetTempleReviews from '@apis/templeReviews';
import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import useNavigateTo from '@hooks/useNavigateTo';
import { useParams } from 'react-router-dom';

import * as styles from './templeReview.css';

const TempleReview = () => {
  const { templestayId } = useParams();
  const navigateToLargeReview = useNavigateTo(`/detail/${templestayId}/blog`);

  const { data, isLoading, isError } = useGetTempleReviews(String(templestayId), Number(1));

  if (isLoading) {
    return <ExceptLayout type="loading" />;
  }

  if (isError) {
    return <ExceptLayout type="networkError" />;
  }

  if (!(data && data.reviews && data.reviews.length)) {
    return (
      <div className={styles.emptyContainer}>
        <DetailTitle title="리뷰" isTotal={false} />
        <p>리뷰가 없어요</p>
      </div>
    );
  }

  return (
    <div className={styles.templeReviewWrapper} id="detail-section-1">
      <DetailTitle
        title="리뷰"
        isTotal={true}
        rigntBtnLabel="전체보기"
        onClick={navigateToLargeReview}
      />
      <div className={styles.templeReviewContainer}>
        {data.reviews.slice(0, 5).map((review) => (
          <div key={review.reviewId}>
            <ReviewCard
              reviewTitle={review.reviewTitle}
              reviewLink={review.reviewLink}
              reviewName={review.reviewName}
              reviewDescription={review.reviewDescription}
              reviewDate={review.reviewDate}
              blogImage={review.reviewImgUrl}
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleReview;

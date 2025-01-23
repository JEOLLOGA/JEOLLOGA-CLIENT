import useGetTempleReviews from '@apis/templeReviews';
import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import DetailTitle from '@components/detailTitle/DetailTitle';
import { useParams } from 'react-router-dom';

import * as styles from './templeReview.css';

const TempleReview = () => {
  const { templestayId } = useParams();
  const { data, isLoading, isError } = useGetTempleReviews(String(templestayId), Number(1));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (!data || !data.reviews || data.reviews.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p>리뷰가 없어요</p>
      </div>
    );
  }

  return (
    <div className={styles.templeReviewWrapper} id="detail-section-0">
      <DetailTitle title="리뷰" isTotal={true} />
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

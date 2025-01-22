import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import DetailTitle from '@components/detailTitle/DetailTitle';
import { TEMPLE_REVIEW_DATA } from '@constants/templeDetail';

import * as styles from './templeReview.css';
const TempleReview = () => {
  return (
    <div className={styles.templeReviewWrapper} id="detail-section-0">
      <DetailTitle title="리뷰" isTotal={true} />
      <div className={styles.templeReviewContainer}>
        {TEMPLE_REVIEW_DATA.reviews.map((review) => (
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

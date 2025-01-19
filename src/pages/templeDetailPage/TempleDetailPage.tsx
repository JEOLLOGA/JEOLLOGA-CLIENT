import ReviewCard from '@components/card/reviewCard/reviewCard/ReviewCard';
import DetailInfo from '@components/common/detailInfo/DetailInfo';
import PageName from '@components/common/pageName/PageName';
import DetailTitle from '@components/detailTitle/DetailTitle';
import ScheduleCard from '@components/schedule/ScheduleCard';
import TemplePrice from '@components/templeDetail/templePrice/TemplePrice';
import TempleTitle from '@components/templeDetail/templeTitle/TempleTitle';
import { TEMPLE_DETAIL_DATA, TEMPLE_REVIEW_DATA } from '@constants/templeDetail';
import useNavigateTo from '@hooks/useNavigateTo';
interface ScheduleData {
  [day: string]: {
    [time: string]: string;
  };
}
const TempleDetailPage = () => {
  const handleToBack = useNavigateTo(-1);
  const handleToLikeButton = () => {
    alert('좋아요버튼클릭');
  };
  const parsedSchedule: ScheduleData = JSON.parse(TEMPLE_DETAIL_DATA.schedule);

  return (
    <div>
      <PageName
        title={`${TEMPLE_DETAIL_DATA.templeName} ${TEMPLE_DETAIL_DATA.templestayName}`}
        onLeftClick={handleToBack}
        onRightClick={handleToLikeButton}
        isLikeBtn={true}
      />
      <TempleTitle />
      <div>
        <DetailInfo title="위치" content={TEMPLE_DETAIL_DATA.templeLocation} />
        <DetailInfo title="전화" content={`+82 ${TEMPLE_DETAIL_DATA.phoneNumber}`} />
      </div>
      <div>
        <div>
          <DetailTitle title="리뷰" isTotal={true} />
          <div>
            {TEMPLE_REVIEW_DATA.reviews.map((review) => (
              <ReviewCard
                key={review.reviewId}
                reviewTitle={review.reviewTitle}
                reviewLink={review.reviewLink}
                reviewName={review.reviewName}
                reviewDescription={review.reviewDescription}
                reviewDate={review.reviewDate}
                blogImage={review.reviewImgUrl}
                size="small"
              />
            ))}
          </div>
        </div>
        <div>
          <DetailTitle title="프로그램 일정" isTotal={false} />
          <div>
            {Object.entries(parsedSchedule).map(([day, programs]) => (
              <ScheduleCard key={day} day={day} programs={programs} />
            ))}
          </div>
        </div>
        <div>
          <TemplePrice />
        </div>
      </div>
    </div>
  );
};

export default TempleDetailPage;

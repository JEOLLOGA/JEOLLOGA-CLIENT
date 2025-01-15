import * as styles from './reviewCard.css';
import CardInfo from '../cardInfo/CardInfo';

interface ReviewCardProps {
  reviewTitle: string;
  reviewDate: string;
  reviewName: string | null;
  reviewLink: string;
  reviewDescription: string | null;
  blogImage: string | null;
  size: 'small' | 'large';
}

const ReviewCard = ({
  reviewTitle,
  reviewDate,
  reviewName,
  reviewLink,
  reviewDescription,
  blogImage,
  size,
}: ReviewCardProps) => {
  const handleButtonClick = () => {
    window.location.href = reviewLink;
  };

  return (
    <button className={styles.cardContainer({ size })} onClick={handleButtonClick}>
      {blogImage ? (
        <img className={styles.cardImage({ size })} src={blogImage} alt="thumbnail" />
      ) : (
        <img
          className={styles.cardImage({ size })}
          src="/default-image.png"
          alt="Default thumbnail"
        />
      )}
      <div className={styles.cardContent({ size })}>
        <div>
          <p className={styles.cardTitle({ size })}>{reviewTitle}</p>
          {size == 'large' && <p className={styles.cardBody}>{reviewDescription}</p>}
        </div>
        <CardInfo reviewName={reviewName} reviewDate={reviewDate} />
      </div>
    </button>
  );
};

export default ReviewCard;

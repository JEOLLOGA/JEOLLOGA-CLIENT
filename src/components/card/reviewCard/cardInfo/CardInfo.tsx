import * as styles from './cardInfo.css';

interface CardInfoProps {
  reviewName?: string | null;
  reviewDate?: string;
}

const CardInfo = ({ reviewName, reviewDate }: CardInfoProps) => {
  return (
    <div className={styles.cardInfo}>
      <p className={styles.reviewerName}>{reviewName || '네이버 블로그'}</p>
      <p>{reviewDate}</p>
    </div>
  );
};

export default CardInfo;

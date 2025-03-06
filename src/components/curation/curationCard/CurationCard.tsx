import * as styles from './curationCard.css';

interface CurationCardProps {
  bgImage: string;
  title: string;
  subtitle: string;
  link: string;
}

const CurationCard = ({ bgImage, title, subtitle, link }: CurationCardProps) => {
  return (
    <a href={link} className={styles.cardContainer} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.textbox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </a>
  );
};

export default CurationCard;

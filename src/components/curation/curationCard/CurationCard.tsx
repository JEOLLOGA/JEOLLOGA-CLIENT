import Image from 'next/image';

import * as styles from './curationCard.css';

interface CurationCardProps {
  bgImage: string;
  title: string;
  subtitle: string;
  link: string;
  onClick: () => void;
}

const CurationCard = ({ bgImage, title, subtitle, link, onClick }: CurationCardProps) => {
  return (
    <a
      href={link}
      className={styles.cardContainer}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onClick={onClick}>
      <Image src={bgImage} alt={title} fill style={{ objectFit: 'cover' }} />
      <div className={styles.textbox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </a>
  );
};

export default CurationCard;

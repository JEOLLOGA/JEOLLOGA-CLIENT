import * as styles from './templeTitle.css';

interface TempleTitleProps {
  tag?: string;
  templeName: string;
  templestayName: string;
}

const TempleTitle = ({ tag, templeName, templestayName }: TempleTitleProps) => {
  return (
    <section className={styles.titleWrapper}>
      <div className={styles.tagBox}>
        {tag?.split(',').map((tagItem, index) => (
          <span key={index} className={styles.tagBox}>
            #{tagItem.trim()}
          </span>
        ))}
      </div>
      <div className={styles.templeNameBox}>
        <h1 className={styles.templeNameContext}>
          {templeName} {templestayName}
        </h1>
      </div>
    </section>
  );
};

export default TempleTitle;

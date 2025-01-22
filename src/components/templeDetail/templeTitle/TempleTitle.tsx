import * as styles from './templeTitle.css';

const priceData = {
  tag: '초보자에게 추천, 절밥이 맛있는, 주차 가능',
  templeName: '봉은사',
  templestayName: '상월선원 템플스테이 (참선정진 집중프로그램) (금요일 7시 시작)',
};

const TempleTitle = () => {
  return (
    <section className={styles.titleWrapper}>
      <div className={styles.tagBox}>
        {priceData.tag.split(',').map((tag, index) => (
          <span key={index} className={styles.tagBox}>
            #{tag.trim()}
          </span>
        ))}
      </div>
      <div className={styles.templeNameBox}>
        <h1 className={styles.templeNameContext}>
          {priceData.templeName} {priceData.templestayName}
        </h1>
      </div>
    </section>
  );
};

export default TempleTitle;

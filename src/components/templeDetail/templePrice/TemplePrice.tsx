import DetailTitle from '@components/detailTitle/DetailTitle';

import * as styles from './templePrice.css';
interface TemplePriceProps {
  templestayPrice?: string;
}

const TemplePrice = ({ templestayPrice }: TemplePriceProps) => {
  return (
    <div className={styles.templePriceWrapper} id="detail-section-2">
      <DetailTitle title="가격" />
      {templestayPrice ? (
        <div className={styles.templePriceBox}>
          <p className={styles.adultString}>성인(1인)</p>
          <p className={styles.priceString}>{templestayPrice}</p>
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <p>가격 정보가 없어요</p>
        </div>
      )}
    </div>
  );
};

export default TemplePrice;

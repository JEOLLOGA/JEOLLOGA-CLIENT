import DetailTitle from '@components/detailTitle/DetailTitle';

import * as styles from './templePrice.css';

const priceData = {
  templestayPrice: '70000원',
};

const TemplePrice = () => {
  return (
    <div className={styles.templePriceWrapper} id="detail-section-2">
      <DetailTitle title="가격" />
      <div className={styles.templePriceBox}>
        <p className={styles.adultString}>성인(1인)</p>
        <p className={styles.priceString}>{priceData.templestayPrice}</p>
      </div>
    </div>
  );
};

export default TemplePrice;

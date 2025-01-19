import DetailTitle from '@components/detailTitle/DetailTitle';

import * as styles from './templePrice.css';

const priceData = {
  templestayPrice: '70000',
};

const TemplePrice = () => {
  return (
    <div className={styles.templePriceWrapper}>
      <DetailTitle title="가격" />
      <div className={styles.templePriceBox}>
        <p className={styles.adultString}>성인(1인)</p>
        <p className={styles.priceString}>{priceData.templestayPrice}원</p>
      </div>
    </div>
  );
};

export default TemplePrice;

import React, { useEffect, useState } from 'react';

import * as styles from './priceSlider.css';

interface PriceSliderProps {
  min: number;
  max: number;
  updatePrice: (min: number, max: number) => void;
}

const PriceSlider = ({ min, max, updatePrice }: PriceSliderProps) => {
  const [minPrice, setMinPrice] = useState<number>(min);
  const [maxPrice, setMaxPrice] = useState<number>(max);

  const MIN_PRICE = 0;
  const MAX_PRICE = 30;

  useEffect(() => {
    updatePrice(minPrice * 10000, maxPrice * 10000);
  }, [minPrice, maxPrice, updatePrice]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const getTrackStyle = () => ({
    left: `${((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
    width: `${((maxPrice - minPrice) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
  });

  return (
    <section>
      <p className={styles.descriptionStyle}>*1인 프로그램 신청 기준</p>
      <div className={styles.priceSlider}>
        <p className={styles.titleStyle}>
          {minPrice}만원 ~ {maxPrice}만원
        </p>

        <div className={styles.sliderContainer}>
          <div className={styles.track}>
            <div className={styles.highlight} style={getTrackStyle()} />
          </div>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={minPrice}
            onChange={handleMinChange}
            className={styles.thumb}
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={maxPrice}
            onChange={handleMaxChange}
            className={styles.thumb}
          />
        </div>
        <div className={styles.priceBox}>
          <p className={styles.textStyle({ align: 'left' })}>{`${MIN_PRICE}원`}</p>
          <p className={styles.textStyle({ align: 'center' })}>{`${MAX_PRICE / 2}만원`}</p>
          <p className={styles.textStyle({ align: 'right' })}>{`${MAX_PRICE}만원 이상`}</p>
        </div>
      </div>
    </section>
  );
};

export default PriceSlider;

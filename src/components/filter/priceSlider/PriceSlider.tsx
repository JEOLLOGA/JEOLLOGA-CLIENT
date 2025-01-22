import debounce from '@hooks/debounce';
import useFilter from '@hooks/useFilter';
import { useAtom } from 'jotai';
import React, { useCallback, useEffect, useRef } from 'react';
import { priceAtom } from 'src/store/store';

import * as styles from './priceSlider.css';

const PriceSlider = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 30;
  const [price, setPrice] = useAtom(priceAtom);

  const { getFilterCount } = useFilter();

  const getFilterCountRef = useRef(getFilterCount);

  useEffect(() => {
    getFilterCountRef.current = getFilterCount;
  }, [getFilterCount]);

  const debouncedGetFilterCount = useCallback(
    debounce(() => {
      getFilterCountRef.current();
    }, 300),
    [],
  );

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), price.maxPrice - 1);
    setPrice({ ...price, minPrice: value });

    debouncedGetFilterCount();
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), price.minPrice + 1);
    setPrice({ ...price, maxPrice: value });

    debouncedGetFilterCount();
  };
  const getTrackStyle = () => ({
    left: `${((price.minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
    width: `${((price.maxPrice - price.minPrice) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
  });

  return (
    <section>
      <p className={styles.descriptionStyle}>*1인 프로그램 신청 기준</p>
      <div className={styles.priceSlider}>
        <p className={styles.titleStyle}>
          {price.minPrice}만원 ~ {price.maxPrice}만원
        </p>

        <div className={styles.sliderContainer}>
          <div className={styles.track}>
            <div className={styles.highlight} style={getTrackStyle()} />
          </div>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={price.minPrice}
            onChange={handleMinChange}
            className={styles.thumb}
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={price.maxPrice}
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

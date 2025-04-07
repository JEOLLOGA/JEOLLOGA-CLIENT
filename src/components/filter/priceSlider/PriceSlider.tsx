'use client';
import debounce from '@hooks/debounce';
import { useAtom } from 'jotai';
import React, { useCallback, useState } from 'react';
import { priceAtom } from 'src/store/store';

import * as styles from './priceSlider.css';

const PriceSlider = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 30;
  const [price, setPrice] = useAtom(priceAtom);
  const [localPrice, setLocalPrice] = useState(price);

  // 디바운스 처리한 price 업데이트 핸들러
  const handleDebounceSetPrice = useCallback(
    debounce((updatedPrice: { minPrice: number; maxPrice: number }) => {
      setPrice(updatedPrice);
    }, 300),
    [],
  );

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), localPrice.maxPrice - 1);
    const updatedLocalPrice = { ...localPrice, minPrice: value };

    setLocalPrice(updatedLocalPrice); // 로컬 상태 업데이트
    handleDebounceSetPrice(updatedLocalPrice); // 디바운스된 업데이트
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), localPrice.minPrice + 1);
    const updatedLocalPrice = { ...localPrice, maxPrice: value };

    setLocalPrice(updatedLocalPrice); // 로컬 상태 업데이트
    handleDebounceSetPrice(updatedLocalPrice); // 디바운스된 업데이트
  };

  const getTrackStyle = () => ({
    left: `${((localPrice.minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
    width: `${((localPrice.maxPrice - localPrice.minPrice) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
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
            value={localPrice.minPrice}
            onChange={handleMinChange}
            className={styles.thumb}
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={localPrice.maxPrice}
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

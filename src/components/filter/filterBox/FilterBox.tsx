import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import PriceSlider from '@components/filter/priceSlider/PriceSlider';

import * as styles from './filterBox.css';

interface FilterBoxProps {
  title: string;
  items: string[];
  id: string;
  filtersState: Record<string, number>;
  onToggleFilter: (filterName: string) => void;
  price: { minPrice: number; maxPrice: number };
  updatePrice: (min: number, max: number) => void;
}

const FilterBox = ({
  title,
  items,
  id,
  filtersState,
  onToggleFilter,
  price,
  updatePrice,
}: FilterBoxProps) => {
  return (
    <div className={styles.filterBoxContainer} id={id}>
      <h1 className={styles.titleStyle}>{title}</h1>
      {title === '가격' ? (
        <PriceSlider min={price.minPrice} max={price.maxPrice} updatePrice={updatePrice} />
      ) : (
        <div className={styles.buttonWrapper}>
          {items.map((item, index) => {
            const isActiveStatus = filtersState[item] === 1;
            return (
              <BasicBtn
                key={index}
                variant="blackOutlined"
                label={item}
                onClick={() => onToggleFilter(item)}
                isActive={isActiveStatus}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterBox;

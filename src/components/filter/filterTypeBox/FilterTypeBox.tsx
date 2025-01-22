import Icon from '@assets/svgs';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import React from 'react';
import titleMap from 'src/type/titleMap';

import * as styles from './filterTypeBox.css';

interface FilterTypeBoxProps {
  activeFilters: string[];
}

const FilterTypeBox = ({ activeFilters }: FilterTypeBoxProps) => {
  return (
    <div className={styles.container}>
      <button>
        <Icon.IcnFilter />
      </button>
      <div className={styles.scrollContainer}>
        {Object.entries(titleMap).map(([key, label]) => {
          return (
            <BasicBtn
              key={key}
              variant="grayOutlined"
              label={label}
              isActive={activeFilters.includes(key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterTypeBox;

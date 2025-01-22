import Icon from '@assets/svgs';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import { useNavigate } from 'react-router-dom';
import titleMap from 'src/type/titleMap';

import * as styles from './filterTypeBox.css';

interface FilterTypeBoxProps {
  activeFilters: string[];
}

const FilterTypeBox = ({ activeFilters }: FilterTypeBoxProps) => {
  const navigator = useNavigate();

  const handleClickFilter = (filter: string) => {
    navigator('/filter', { state: { selectedTap: filter } });
  };

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
              onClick={() => handleClickFilter(key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterTypeBox;

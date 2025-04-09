import Icon from '@assets/svgs';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import { useRouter } from 'next/navigation';
import titleMap from 'src/type/titleMap';

import * as styles from './filterTypeBox.css';

interface FilterTypeBoxProps {
  activeFilters: string[];
}

const FilterTypeBox = ({ activeFilters }: FilterTypeBoxProps) => {
  const router = useRouter();

  const handleClickFilter = (filter: string) => {
    router.push(`/filter?selectedTap=${filter}`);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleClickFilter('region')}>
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

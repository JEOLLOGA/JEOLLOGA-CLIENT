import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import PageName from '@components/common/pageName/PageName';
import TapBar from '@components/common/tapBar/TapBar';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import useFilter from '@hooks/useFilter';
import { useAtomValue } from 'jotai';
import { useLocation } from 'react-router-dom';
import { filterListAtom } from 'src/store/store';
import titleMap from 'src/type/titleMap';

import * as styles from './filterPage.css';

const FilterPage = () => {
  const { totalCount, toggleFilter, handleResetFilter, handleSearch } = useFilter();

  const location = useLocation();
  const { selectedTap } = location.state || {};
  const filterInstance = useAtomValue(filterListAtom);

  const filtersState = filterInstance.getAllStates();

  return (
    <div>
      <header className={styles.header}>
        <PageName title="필터" />
        <TapBar type="filter" selectedTap={selectedTap} />
      </header>
      <main className={styles.main}>
        {Object.entries(FILTERS).map(([key, items]) => (
          <div key={key}>
            <FilterBox
              title={titleMap[key]}
              items={items}
              id={key}
              filtersState={filtersState}
              onToggleFilter={toggleFilter}
            />
            <Divider />
          </div>
        ))}
      </main>
      <ButtonBar
        type="reset"
        label={`${totalCount || 0}개의 템플스테이 보기`}
        largeBtnClick={() => {
          handleSearch();
        }}
        handleResetFilter={handleResetFilter}
      />
    </div>
  );
};

export default FilterPage;

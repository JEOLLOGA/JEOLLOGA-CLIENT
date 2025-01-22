import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import PageName from '@components/common/pageName/PageName';
import TapBar from '@components/common/tapBar/TapBar';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import useFilter from '@hooks/useFilter';
import titleMap from 'src/type/titleMap';

import * as styles from './filterPage.css';

const FilterPage = () => {
  const { filtersState, totalCount, toggleFilter, handleResetFilter, handleSearch } = useFilter();

  return (
    <div>
      <header className={styles.header}>
        <PageName title="필터" isLikeBtn={false} />
        <TapBar type="filter" />
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
        label={`${totalCount}개의 템플스테이 보기`}
        handleSearch={handleSearch}
        handleResetFilter={handleResetFilter}
      />
    </div>
  );
};

export default FilterPage;

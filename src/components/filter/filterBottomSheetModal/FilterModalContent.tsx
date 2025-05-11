import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import useFilter from '@hooks/useFilter';
import { useAtomValue } from 'jotai';
import useEventLogger from 'src/gtm/hooks/useEventLogger';
import { filterListAtom } from 'src/store/store';
import titleMap from 'src/type/titleMap';

import * as styles from './filterModalContent.css';

interface Props {
  onComplete?: () => void;
  scrollRef: React.RefObject<HTMLDivElement>;
}

const FilterModalContent = ({ onComplete, scrollRef }: Props) => {
  const { totalCount, toggleFilter, handleResetFilter, handleSearch } = useFilter();
  const filterInstance = useAtomValue(filterListAtom);
  const filtersState = filterInstance.getAllStates();
  const { logClickEvent } = useEventLogger('filter_tag');

  const searchFilter = async () => {
    await handleSearch();
    logClickEvent('click_list', { label: '' });
    onComplete?.();
  };

  return (
    <>
      <main className={styles.main} ref={scrollRef}>
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
        largeBtnClick={searchFilter}
        handleResetFilter={handleResetFilter}
      />
    </>
  );
};
export default FilterModalContent;

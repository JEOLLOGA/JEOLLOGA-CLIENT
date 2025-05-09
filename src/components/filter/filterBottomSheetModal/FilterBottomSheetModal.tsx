import BottomSheet from '@components/common/bottmsheet/BottomSheet';
import TapBar from '@components/common/tapBar/TapBar';
import FilterModalContent from '@components/filter/filterBottomSheetModal/FilterModalContent';
import { useRef } from 'react';

import * as styles from './filterModal.css';

interface FilterBottomSheetModalProps {
  selectedTap: string;
  handleCloseModal: () => void;
  isOpen: boolean;
}

const FilterBottomSheetModal = ({
  selectedTap,
  handleCloseModal,
  isOpen,
}: FilterBottomSheetModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={handleCloseModal}
      header={
        <>
          <h1 className={styles.titleStyle}>필터</h1>
          <TapBar
            type="filter"
            selectedTap={selectedTap ?? undefined}
            scrollContainerRef={scrollRef}
          />
        </>
      }>
      <FilterModalContent onComplete={handleCloseModal} scrollRef={scrollRef} />
    </BottomSheet>
  );
};

export default FilterBottomSheetModal;

import Icon from '@assets/svgs';
import { PAGINATION_UNIT } from '@constants/constants';

import * as styles from './pagination.css';
import PageBtn from '../button/pageBtn/PageBtn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  color: 'gray' | 'white';
}

const Pagination = ({ currentPage, totalPages, onPageChange, color }: PaginationProps) => {
  const calculatePageRange = () => {
    const rangeStart = Math.floor((currentPage - 1) / PAGINATION_UNIT) * PAGINATION_UNIT + 1;
    const rangeEnd = Math.min(rangeStart + PAGINATION_UNIT - 1, totalPages);
    return { rangeStart, rangeEnd };
  };

  const { rangeStart, rangeEnd } = calculatePageRange();

  const isLeftDisabled = rangeStart === 1;
  const isRightDisabled = rangeEnd === totalPages;

  const renderPageNumbers = () => {
    const pages = Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i);

    return pages.map((page) => (
      <PageBtn
        key={page}
        pageIndex={page}
        currentPageNum={currentPage}
        onClick={() => onPageChange(page)}
      />
    ));
  };

  return (
    <nav className={`${styles.paginationContainer} ${styles.containerColors[color]}`}>
      <button
        className={styles.arrowStyle({ direction: 'left', isDisabled: isLeftDisabled })}
        onClick={() => onPageChange(Math.max(1, rangeStart - PAGINATION_UNIT))}
        disabled={isLeftDisabled}>
        <Icon.IcnLineArrowSmallLeft
          className={isLeftDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
      {renderPageNumbers()}
      <button
        className={styles.arrowStyle({ direction: 'right', isDisabled: isRightDisabled })}
        onClick={() => onPageChange(Math.min(totalPages, rangeStart + PAGINATION_UNIT))}
        disabled={isRightDisabled}>
        <Icon.IcnLineArrowSmallRight
          className={isRightDisabled ? styles.disabledIcon : styles.iconStyle}
        />
      </button>
    </nav>
  );
};

export default Pagination;

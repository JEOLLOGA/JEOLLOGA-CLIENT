'use client';
import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import tapBarContainer from '@components/common/tapBar/tapBar.css';
import { DETAIL_HEADER_HEIGHT, HEADER_HEIGHT } from '@constants/constants';
import FILTERS from '@constants/filters';
import { TapType, TAPS } from '@constants/taps';
import useMoveScroll from '@hooks/useMoveScroll';
import useScrollTracker from '@hooks/useScrollTrack';
import { useEffect } from 'react';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

interface TapBarProps {
  type: TapType;
  selectedTap?: string;
}

const TapBar = ({ type, selectedTap }: TapBarProps) => {
  const headerHeight = type === 'filter' ? HEADER_HEIGHT : DETAIL_HEADER_HEIGHT;
  const taplist = TAPS[type];
  const sectionIds =
    type === 'filter'
      ? Object.keys(FILTERS)
      : TAPS.detail.map((_, index) => `detail-section-${index}`);

  const { scrollIndex, handleClick } = useScrollTracker(sectionIds, headerHeight);
  const scrollToElement = useMoveScroll(headerHeight);
  const { logClickEvent } = useEventLogger('filter_tag');

  const handleTabClick = (index: number) => {
    handleClick(index);
    scrollToElement(sectionIds, index);

    if (type === 'filter') {
      logClickEvent('click_tag', {
        label: TAPS.filter[index],
      });
    } else {
      logClickEvent('click_tab', {
        screen: 'top_tab',
        label: TAPS.detail[index],
      });
    }
  };

  useEffect(() => {
    if (selectedTap) {
      const selectedIndex = sectionIds.indexOf(selectedTap);
      if (selectedIndex !== -1) {
        handleClick(selectedIndex);
        scrollToElement(sectionIds, selectedIndex);
      }
    }
  }, []);

  return (
    <div className={tapBarContainer}>
      {taplist.map((label, index) => (
        <UnderlinedBtn
          key={index}
          label={label}
          isActive={scrollIndex === index}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
  );
};

export default TapBar;

import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import tapBarContainer from '@components/common/tapBar/tapBar.css';
import { HEADER_HEIGHT } from '@constants/constants';
import FILTERS from '@constants/filters';
import { TapType, TAPS } from '@constants/taps';
import useMoveScroll from '@hooks/useMoveScroll';
import useScrollTracker from '@hooks/useScrollTrack';

interface TapBarProps {
  type: TapType;
}

const TapBar = ({ type }: TapBarProps) => {
  const headerHeight = HEADER_HEIGHT;
  const taplist = TAPS[type];
  const sectionIds =
    type === 'filter'
      ? Object.keys(FILTERS)
      : TAPS.detail.map((_, index) => `detail-section-${index}`);

  const { scrollIndex, handleClick } = useScrollTracker(sectionIds, headerHeight);
  const scrollToElement = useMoveScroll(headerHeight);

  const handleTabClick = (index: number) => {
    handleClick(index);
    scrollToElement(sectionIds, index);
  };

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

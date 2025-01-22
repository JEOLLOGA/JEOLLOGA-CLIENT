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
  const taplist = TAPS[type];

  const sectionIds = Object.keys(FILTERS);

  const { scrollIndex, handleClick } = useScrollTracker(sectionIds, HEADER_HEIGHT);
  const scrollToElement = useMoveScroll(HEADER_HEIGHT);

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

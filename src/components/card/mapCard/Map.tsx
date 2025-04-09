import mapImage from '@assets/images/home_card_map.png';
import LocBtn from '@components/card/mapCard/LocBtn';
import { REGION_INFOS, REGION_LABEL_MAP } from '@constants/regionInfos';
import useFilter from '@hooks/useFilter';
import Image from 'next/image';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import mapStyle from './map.css';

const Map = () => {
  const { toggleFilter, handleSearch } = useFilter();
  const { logClickEvent } = useEventLogger('home_map');

  const handleClickMap = async (region: string) => {
    await toggleFilter(region);
    handleSearch();

    logClickEvent(`click_region_${REGION_LABEL_MAP[region]}`, {
      label: region,
    });
  };

  return (
    <div className={mapStyle}>
      <Image src={mapImage} alt="지도" fill style={{ objectFit: 'cover' }} priority />
      {Object.entries(REGION_INFOS).map(([region, { top, left }]) => (
        <LocBtn
          key={region}
          region={region}
          top={top}
          left={left}
          onClick={() => handleClickMap(region)}
        />
      ))}
    </div>
  );
};

export default Map;

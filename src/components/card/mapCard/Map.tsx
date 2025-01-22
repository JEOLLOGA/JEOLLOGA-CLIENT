import LocBtn from '@components/card/mapCard/LocBtn';
import mapStyle from '@components/card/mapCard/map.css';
import REGION_INFOS from '@constants/regionInfos';
import useFilter from '@hooks/useFilter';

const Map = () => {
  const { toggleFilter, handleSearch } = useFilter();

  const handleClickMap = async (region: string) => {
    await toggleFilter(region);
    handleSearch();
  };

  return (
    <div className={mapStyle}>
      {Object.entries(REGION_INFOS).map(([region, { top, left }]) => (
        <LocBtn
          key={region}
          region={region}
          top={top}
          left={left}
          onClick={() => {
            handleClickMap(region);
          }}
        />
      ))}
    </div>
  );
};

export default Map;

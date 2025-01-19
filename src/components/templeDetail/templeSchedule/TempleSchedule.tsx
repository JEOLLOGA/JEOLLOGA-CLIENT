import DetailTitle from '@components/detailTitle/DetailTitle';
import ScheduleCard from '@components/schedule/ScheduleCard';
import { TEMPLE_DETAIL_DATA } from '@constants/templeDetail';

import templeScheduleContainer from './templeSchedule.css';

interface ScheduleData {
  [day: string]: {
    [time: string]: string;
  };
}

const TempleSchedule = () => {
  const parsedSchedule: ScheduleData = JSON.parse(TEMPLE_DETAIL_DATA.schedule);
  return (
    <div className={templeScheduleContainer}>
      <DetailTitle title="프로그램 일정" isTotal={false} />
      {Object.entries(parsedSchedule).map(([day, programs]) => (
        <ScheduleCard key={day} day={day} programs={programs} />
      ))}
    </div>
  );
};

export default TempleSchedule;

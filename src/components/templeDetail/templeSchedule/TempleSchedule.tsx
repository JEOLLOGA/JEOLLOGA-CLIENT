import DetailTitle from '@components/detailTitle/DetailTitle';
import ScheduleCard from '@components/schedule/ScheduleCard';

import * as styles from './templeSchedule.css';

interface TempleScheduleProps {
  schedule?: string;
}
interface ScheduleData {
  [day: string]: {
    [time: string]: string;
  };
}

const TempleSchedule = ({ schedule }: TempleScheduleProps) => {
  let parsedSchedule: ScheduleData | null = null;

  if (schedule) {
    parsedSchedule = JSON.parse(schedule);
  }

  return (
    <div className={styles.templeScheduleContainer} id="detail-section-1">
      <DetailTitle title="프로그램 일정" isTotal={false} />
      {parsedSchedule ? (
        Object.entries(parsedSchedule).map(([day, programs]) => (
          <ScheduleCard key={day} day={day} programs={programs} />
        ))
      ) : (
        <div className={styles.emptyContainer}>
          <p>프로그램 일정이 없어요</p>
        </div>
      )}
    </div>
  );
};

export default TempleSchedule;

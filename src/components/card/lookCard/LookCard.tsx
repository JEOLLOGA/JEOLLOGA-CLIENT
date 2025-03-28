import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import useFilter from '@hooks/useFilter';
import useEventLogger from 'src/gtm/hooks/useEventLogger';

import * as styles from './lookCard.css';

interface LookCardProps {
  name?: string;
}

const LookCard = ({ name = '일로와' }: LookCardProps) => {
  const { logClickEvent } = useEventLogger('home_banner');
  const { handleSearch } = useFilter();

  const handleClickBtn = () => {
    handleSearch();
    logClickEvent('click_templestay_detail');
  };

  return (
    <section className={styles.cardWrapper}>
      <dotlottie-player
        key="look"
        className={styles.lottieStyle}
        src="/lotties/home.lottie"
        autoplay
        loop
      />
      <div className={styles.textWrapper}>
        <div className={styles.textBox}>
          <h1 className={styles.titleStyle}>
            <span className={styles.name}>{name}</span>
            {`님을 위한\n템플스테이,\n찾으러 가볼까요?`}
          </h1>
          <div>
            <BasicBtn
              onClick={handleClickBtn}
              variant="green"
              label="둘러보기"
              size="large"
              rightIcon="IcnLineArrowLargeRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookCard;

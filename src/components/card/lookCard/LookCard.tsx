import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import { useNavigate } from 'react-router-dom';

import * as styles from './lookCard.css';

interface LookCardProps {
  name: string;
}

const LookCard = ({ name }: LookCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/look'); // 추후 변경예정
  };

  return (
    <section className={styles.cardWrapper}>
      <dotlottie-player
        className={styles.lottieStyle}
        src="src/assets/lotties/home.lottie"
        autoplay
        loop
      />
      <div className={styles.textWrapper}>
        <div className={styles.textBox}>
          <span>
            <span className={styles.name}>{name}</span> 님을 위한
            <br />
            템플스테이,
            <br />
            찾으러 가볼까요?
          </span>
          <div>
            <BasicBtn
              onClick={handleClick}
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

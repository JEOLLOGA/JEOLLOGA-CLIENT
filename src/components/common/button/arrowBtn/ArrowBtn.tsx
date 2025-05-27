'use client';

import Icon from '@assets/svgs';
import BtnBox from '@components/common/button/arrowBtn/arrowBtn.css';

const ArrowBtn = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button onClick={handleClick} className={BtnBox}>
      <Icon.IcnBackBlackLeft />
    </button>
  );
};

export default ArrowBtn;

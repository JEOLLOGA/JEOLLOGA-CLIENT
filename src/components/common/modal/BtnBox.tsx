import PopupBtn from '@components/common/button/popupBtn/PopupBtn';

import * as styles from './modal.css';

const BtnBox = () => {
  return (
    <div className={styles.btnBox}>
      <PopupBtn label="취소" color="gray" onClick={() => {}} />
      <PopupBtn label="로그인하기" color="green" onClick={() => {}} />
    </div>
  );
};

export default BtnBox;

import btnStyle from '@components/common/button/popupBtn/popup.css';

interface PopupBtnProps {
  color: 'green' | 'gray';
  label: string;
  onClick: () => void;
}

const PopupBtn = ({ color, label, onClick }: PopupBtnProps) => {
  return (
    <button className={btnStyle({ color })} onClick={onClick}>
      {label}
    </button>
  );
};

export default PopupBtn;

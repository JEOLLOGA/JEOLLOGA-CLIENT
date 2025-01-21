import { titleContainerStyle, titleStyle, buttonStyle } from './detailTitle.css';

interface DetailTitleProps {
  title: string;
  isTotal?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium';
  rigntBtnLabel?: string;
}

const DetailTitle = ({
  title,
  isTotal = false,
  onClick,
  size = 'medium',
  rigntBtnLabel = '전체보기',
}: DetailTitleProps) => {
  return (
    <div className={titleContainerStyle}>
      <p className={titleStyle({ size })}>{title}</p>
      {isTotal && (
        <button className={buttonStyle} onClick={onClick}>
          {rigntBtnLabel}
        </button>
      )}
    </div>
  );
};

export default DetailTitle;

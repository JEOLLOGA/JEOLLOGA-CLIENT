import { titleContainerStyle, titleStyle, buttonStyle } from './detailTitle.css';

interface DetailTitleProps {
  title: string;
  isTotal?: boolean;
  size?: 'small' | 'medium';
  rigntBtnLabel?: string;
  onClick?: () => void;
}

const DetailTitle = ({
  title,
  isTotal = false,
  size = 'medium',
  rigntBtnLabel,
  onClick,
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

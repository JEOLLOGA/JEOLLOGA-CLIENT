import { useDelAllSearchRecord } from '@apis/search';

import { titleContainerStyle, titleStyle, buttonStyle } from './detailTitle.css';

interface DetailTitleProps {
  title: string;
  isTotal?: boolean;
  size?: 'small' | 'medium';
  rigntBtnLabel?: string;
}

const DetailTitle = ({
  title,
  isTotal = false,
  size = 'medium',
  rigntBtnLabel = '전체보기',
}: DetailTitleProps) => {
  const { mutate: deleteAllSearchRecords } = useDelAllSearchRecord();

  const handleDeleteAll = () => {
    const userId = localStorage.getItem('userId');
    deleteAllSearchRecords({ userId: Number(userId) });
  };
  return (
    <div className={titleContainerStyle}>
      <p className={titleStyle({ size })}>{title}</p>
      {isTotal && (
        <button className={buttonStyle} onClick={handleDeleteAll}>
          {rigntBtnLabel}
        </button>
      )}
    </div>
  );
};

export default DetailTitle;

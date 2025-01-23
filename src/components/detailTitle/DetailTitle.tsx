import useNavigateTo from '@hooks/useNavigateTo';
import { useDelAllSearchRecord } from '@apis/search';
import { useParams } from 'react-router-dom';
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
  const navigateToLargeReview = useNavigateTo(`/detail/blog`);

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

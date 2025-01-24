import Icon from '@assets/svgs';
import { useNavigate } from 'react-router-dom';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  onRightClick?: () => void;
  isLikeBtn?: boolean;
  isLiked?: boolean;
  isPrivate?: boolean;
}

const PageName = ({
  title,
  onRightClick,
  isLikeBtn = true,
  isLiked = true,
  isPrivate,
}: PageNameProps) => {
  const navigate = useNavigate();

  const handleToBack = () => {
    if (isPrivate) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={handleToBack}>
        <Icon.IcnArrowBlackLeft />
      </button>
      <span className={PageNameStyle.titleStyle}>{title}</span>
      {isLikeBtn && (
        <button className={PageNameStyle.buttonLayout} onClick={onRightClick}>
          {isLiked ? <Icon.IcnFlowerPink /> : <Icon.IcnFlowerGray />}
        </button>
      )}
    </nav>
  );
};

export default PageName;

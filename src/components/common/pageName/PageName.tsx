import Icon from '@assets/svgs';
import useNavigateTo from '@hooks/useNavigateTo';
import { useState } from 'react';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  onRightClick?: () => void;
  isLikeBtn?: boolean;
}

const PageName = ({ title, onRightClick, isLikeBtn = true }: PageNameProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    if (onRightClick) onRightClick();
  };

  const handleToBack = useNavigateTo(-1);

  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={handleToBack}>
        <Icon.IcnArrowBlackLeft />
      </button>
      <span className={PageNameStyle.titleStyle}>{title}</span>
      {isLikeBtn && (
        <button className={PageNameStyle.buttonLayout} onClick={handleLikeClick}>
          {isLiked ? <Icon.IcnFlowerPink /> : <Icon.IcnFlowerGray />}
        </button>
      )}
    </nav>
  );
};

export default PageName;

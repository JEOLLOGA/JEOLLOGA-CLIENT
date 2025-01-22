import Icon from '@assets/svgs';
import useNavigateTo from '@hooks/useNavigateTo';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  onRightClick?: () => void;
  isLikeBtn?: boolean;
}

const PageName = ({ title, onRightClick, isLikeBtn = true }: PageNameProps) => {
  const handleToBack = useNavigateTo(-1);

  return (
    <nav className={PageNameStyle.container}>
      <button className={PageNameStyle.buttonLayout} onClick={handleToBack}>
        <Icon.IcnArrowBlackLeft />
      </button>
      <span className={PageNameStyle.titleStyle}>{title}</span>
      {isLikeBtn && (
        <button className={PageNameStyle.buttonLayout} onClick={onRightClick}>
          <Icon.IcnWish />
        </button>
      )}
    </nav>
  );
};

export default PageName;

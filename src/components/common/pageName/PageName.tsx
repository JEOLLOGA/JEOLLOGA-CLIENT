import Icon from '@assets/svgs';
import { useNavigate } from 'react-router-dom';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  isPrivate?: boolean;
}

const PageName = ({ title, isPrivate }: PageNameProps) => {
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
    </nav>
  );
};

export default PageName;

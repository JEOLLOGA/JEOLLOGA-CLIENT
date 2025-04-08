'use client';

import Icon from '@assets/svgs';
import { useRouter } from 'next/navigation';

import * as PageNameStyle from './pageName.css';

interface PageNameProps {
  title: string;
  isPrivate?: boolean;
}

const PageName = ({ title, isPrivate }: PageNameProps) => {
  const router = useRouter();

  const handleToBack = () => {
    if (isPrivate) {
      router.push('/');
    } else {
      router.back();
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

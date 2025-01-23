import { useNavigate } from 'react-router-dom';

const useNavigateTo = (routePage: string | number) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    if (typeof routePage === 'string') {
      navigate(routePage);
    } else if (typeof routePage === 'number') {
      navigate(routePage);
    }
    window.scrollTo(0, 0);
  };

  return navigateToPage;
};

export default useNavigateTo;

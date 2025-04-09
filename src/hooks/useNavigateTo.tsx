import { useRouter } from 'next/navigation';

const useNavigateTo = (routePage: string | number) => {
  const router = useRouter();

  const navigateToPage = () => {
    if (typeof routePage === 'string') {
      router.push(routePage);
    } else if (typeof routePage === 'number') {
      router.back();
    }
  };

  return navigateToPage;
};

export default useNavigateTo;

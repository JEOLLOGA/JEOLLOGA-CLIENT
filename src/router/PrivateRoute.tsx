'use client';

import { getStorageValue } from '@hooks/useLocalStorage';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
  redirectPath: string;
  state?: { type: 'my' | 'wish' }; // ✅ 쿼리스트링으로 encode 가능
}

const PrivateRoute = ({ children, redirectPath, state }: PrivateRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAuthenticated = getStorageValue('Authorization');

  useEffect(() => {
    if (!isAuthenticated) {
      const query = new URLSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        ...(state ? state : {}),
        from: pathname,
        isPrivate: 'true',
      });

      router.replace(`${redirectPath}?${query.toString()}`);
    }
  }, [isAuthenticated, router, pathname, searchParams, state]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default PrivateRoute;

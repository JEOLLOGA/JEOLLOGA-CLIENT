'use client';
import ClientProviders from '@app/layout.client';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      router.replace(`/login?type=${pathname}`);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <ExceptLayout type="loading" />;
  }

  return (
    <html lang="ko">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default PrivateLayout;

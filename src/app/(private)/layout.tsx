'use client';
import ClientProviders from '@app/layout.client';
import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW9GZMJG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

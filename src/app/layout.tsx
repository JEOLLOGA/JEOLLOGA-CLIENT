import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: '절로가 | 템플스테이를 만나는 가장 쉬운 방법',
  description: '템플스테이를 쉽고 빠르게 찾고, 지친 일상에 특별한 휴식을 더해보세요.',
  keywords:
    '템플스테이, 절로가, 여행, 사찰, 명상, 힐링, 템플스테이 추천, 휴식형 템플스테이, 체험형 템플스테이',
  openGraph: {
    title: '절로가 | 템플스테이를 만나는 가장 쉬운 방법',
    description: '템플스테이를 쉽고 빠르게 찾고, 지친 일상에 특별한 휴식을 더해보세요.',
    url: 'https://www.gototemplestay.com/',
    siteName: '절로가',
    images: [
      {
        url: '/img_og.png',
        width: 1200,
        height: 630,
        alt: '절로가 OG 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  metadataBase: new URL('https://www.gototemplestay.com'),
  alternates: {
    canonical: 'https://www.gototemplestay.com',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW9GZMJG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"></iframe>
        </noscript>
        {/* End Google Tag Manager */}
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

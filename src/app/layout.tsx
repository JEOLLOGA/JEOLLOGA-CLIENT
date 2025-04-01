import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '절로가 | 템플스테이를 만나는 가장 쉬운 방법',
  description: '템플스테이를 쉽고 빠르게 찾고, 지친 일상에 특별한 휴식을 더해보세요.',
  keywords: [
    '템플스테이',
    '절로가',
    '여행',
    '사찰',
    '명상',
    '힐링',
    '템플스테이 추천',
    '휴식형 템플스테이',
    '체험형 템플스테이',
  ],
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
        alt: '절로가 Open Graph 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gototemplestay.com/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
        {children}
      </body>
    </html>
  );
}

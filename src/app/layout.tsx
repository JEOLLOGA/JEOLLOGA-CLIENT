import { Metadata } from 'next';
import Script from 'next/script';
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
      <head>
        <link rel="icon" type="image/svg+xml" href="public/favicon.ico" />

        {/* -- Google Tag Manager -- */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PW9GZMJG');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
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

        <div id="root">{children}</div>

        <script
          type="text/javascript"
          src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=%VITE_NAVER_API_KEY%"></script>
      </body>
    </html>
  );
}

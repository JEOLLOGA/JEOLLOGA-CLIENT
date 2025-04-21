import { globalFontFace } from '@vanilla-extract/css';

globalFontFace('Pretendard-Regular', {
  fontWeight: 400,
  fontStyle: 'normal',
  src: "url('/assets/fonts/Pretendard-Regular.woff2') format('woff2')",
});

globalFontFace('Pretendard-Medium', {
  fontWeight: 500,
  fontStyle: 'normal',
  src: "url('/assets/fonts/Pretendard-Medium.woff2') format('woff2')",
});

globalFontFace('Pretendard-SemiBold', {
  fontWeight: 600,
  fontStyle: 'normal',
  src: "url('/assets/fonts/Pretendard-SemiBold.woff2') format('woff2')",
});

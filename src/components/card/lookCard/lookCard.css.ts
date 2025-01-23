import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  width: '33.5rem',
  height: '31.1rem',
  marginTop: '1.2rem',
  position: 'relative',
  borderRadius: 8,
  overflow: 'hidden',
});

export const lottieStyle = style({
  width: '33.5rem',
  height: '31.1rem',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
});

export const textWrapper = style({
  padding: '2rem',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const textBox = style({
  ...theme.FONTS.b0R22,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  zIndex: 1,
});

export const name = style({
  ...theme.FONTS.h0Sb22,
});

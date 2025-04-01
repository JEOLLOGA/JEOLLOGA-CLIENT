import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const logoContainer = style({
  height: '100vh',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateRows: 'auto 1fr auto',
  paddingBottom: '4.4rem',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '4.4rem',
  marginBottom: '4.3rem',
  gap: '1.5rem',
});

export const textStyle = style({
  ...theme.FONTS.b7R16,
});

export const lottieStyle = style({
  width: '33.5rem',
  height: '34.8rem',
  borderRadius: 8,
  overflow: 'hidden',
});

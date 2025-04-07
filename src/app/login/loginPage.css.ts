import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textStyle = style({
  ...theme.FONTS.h3Sb18,
  whiteSpace: 'pre-line',
  textAlign: 'center',
});

export const loginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const contentWrapper = style({
  margin: '8.4rem 0 9.3rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const imgStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

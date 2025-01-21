import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '13.1rem',
});

export const textStyle = style({
  ...theme.FONTS.h4Sb17,
  color: theme.COLORS.black,
  textAlign: 'center',
  marginBottom: '5rem',
  width: '23.4rem',
  whiteSpace: 'pre-line',
});

export const highlight = style({
  ...theme.FONTS.h4Sb17,
  color: theme.COLORS.green4,
});

export const imgStyle = style({
  width: '15rem',
  height: '10.3rem',
});

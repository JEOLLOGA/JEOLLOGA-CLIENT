import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '12.5rem',
});

export const textStyle = style({
  ...theme.FONTS.h4Sb17,
  color: theme.COLORS.black,
  whiteSpace: 'pre-line',
  textAlign: 'center',
  marginBottom: '5rem',
});

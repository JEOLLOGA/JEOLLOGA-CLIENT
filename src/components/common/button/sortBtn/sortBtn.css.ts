import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '0.8rem 0',
});

export const textStyle = style({
  color: theme.COLORS.gray9,
  ...theme.FONTS.c6R13,
});

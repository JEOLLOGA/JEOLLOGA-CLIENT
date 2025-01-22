import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const filterBoxContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',

  width: '29.2rem',
  padding: '3.6rem 0 3.2rem',
});

export const titleStyle = style({
  ...theme.FONTS.h2Sb20,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
});

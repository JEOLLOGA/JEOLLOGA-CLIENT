import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.5rem',
  height: '5rem',
});

export const tagBox = style({
  display: 'flex',
  gap: '0.6rem',
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray8,
});

export const templeNameBox = style({
  ...theme.FONTS.h2Sb20,
});

export const templeNameContext = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

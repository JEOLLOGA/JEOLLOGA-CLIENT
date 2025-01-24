import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const templeInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  paddingBottom: '0.7rem',
});

export const templeInfoBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.5rem',
  minHeight: '9rem',
  gap: '0.2rem',
});

export const templeInfoTitle = style({
  ...theme.FONTS.h5Sb16,
  color: theme.COLORS.gray10,
});

export const templeInfoContent = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  minHeight: '6.6rem',
  ...theme.FONTS.b7R16,
  color: theme.COLORS.gray10,
});

export const expandedContent = style({
  WebkitLineClamp: 'unset',
  overflow: 'visible',
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray7,
});

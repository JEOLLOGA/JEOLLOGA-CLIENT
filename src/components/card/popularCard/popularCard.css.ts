import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  width: '33.5rem',
  cursor: 'pointer',
});

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const templeInfoBox = style({
  display: 'flex',
  flexDirection: 'column',
});

export const templeName = style({
  ...theme.FONTS.h3Sb18,
  textAlign: 'left',
});

export const bottomBox = style({
  display: 'flex',
  color: theme.COLORS.gray8,
  ...theme.FONTS.b9R15,
  gap: '1rem',
  alignItems: 'center',
});

export const likeBtn = style({
  padding: '1rem',
});

export const imgBox = style({
  height: '13.7rem',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'flex-end',
  color: theme.COLORS.white,
  overflow: 'hidden',
  backgroundPosition: 'center',
  position: 'relative',
});

export const bottomContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  paddingTop: '0.8rem',
});

export const bottomWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

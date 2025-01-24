import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const templeReviewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const templeReviewContainer = style({
  display: 'flex',
  gap: '1rem',
  width: '33.5rem',
  overflow: 'scroll',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray7,
});

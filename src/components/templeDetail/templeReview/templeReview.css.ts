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

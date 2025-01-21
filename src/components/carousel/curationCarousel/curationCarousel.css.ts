import { style } from '@vanilla-extract/css';

export const emptyBox = style({
  width: '2rem',
  height: '100%',
  flexShrink: 0,
});

export const carouselWrapper = style({
  width: '37.5rem',
  overflow: 'hidden',
  display: 'flex',
});

export const carouselContainer = style({
  display: 'flex',
  gap: '1rem',
});

export const carouselItem = style({
  flexShrink: 0,
});

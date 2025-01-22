import { style } from '@vanilla-extract/css';

export const carouselWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
});

export const carouselContainer = style({
  width: '33.5rem',
  overflow: 'hidden',
  display: 'flex',
});

export const carouselBox = style({
  display: 'flex',
  gap: '2rem',
});

export const carouselItem = style({
  flexShrink: 0,
});

export const emptyBox = style({
  width: '2rem',
  height: '100%',
  flexShrink: 0,
});

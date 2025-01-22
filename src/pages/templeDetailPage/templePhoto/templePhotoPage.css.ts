import { style } from '@vanilla-extract/css';

export const photoGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem 1.1rem',
  justifyContent: 'center',
  paddingBottom: '1rem',
});

export const photoItem = style({
  width: '16.2rem',
  height: '16.2rem',
  borderRadius: 8,
  objectFit: 'cover',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

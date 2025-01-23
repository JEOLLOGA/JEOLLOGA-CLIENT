import { style } from '@vanilla-extract/css';

export const photoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const photoGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  width: '33.5rem',
  gap: '1rem 1.1rem',
  justifyContent: 'flex-start',
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

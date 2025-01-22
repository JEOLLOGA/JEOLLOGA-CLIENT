import { style } from '@vanilla-extract/css';

export const reviewComponent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  overflow: 'hidden',
});

export const reviewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const pageBox = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3.8rem',
  marginBottom: '5.9rem',
});

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '1.1rem 2rem',
  height: '5.8rem',
  marginTop: '0.8rem',
});

export const scrollContainer = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
});

import { style } from '@vanilla-extract/css';

export const topDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
});

export const templeDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.8rem',
});

export const templeDetailMiddle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5.2rem',
  marginBottom: '3.5rem',
});

export const templeTitleBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
});

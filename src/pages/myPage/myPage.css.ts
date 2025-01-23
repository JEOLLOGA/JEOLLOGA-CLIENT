import { style } from '@vanilla-extract/css';

export const myPageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const userInfoContainer = style({
  minHeight: '75rem',
  position: 'relative',
});

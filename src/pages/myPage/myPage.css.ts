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

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
});

export const hidden = style({
  display: 'none',
});

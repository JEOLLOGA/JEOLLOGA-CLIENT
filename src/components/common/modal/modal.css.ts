import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const modalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.8rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '33.1rem',
  height: '18.1rem',
  padding: '3rem 2rem 2rem',

  borderRadius: '8px',
  backgroundColor: theme.COLORS.white,
  zIndex: 100,
});

export const modalBackdrop = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,

  zIndex: 100,
  width: '100%',
  height: 'calc(100% + 1.2rem)',
  background: theme.COLORS.black60,

  marginTop: '-1.2rem',
});

export const modalTextBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',

  width: '29.1rem',
  height: '5.3rem',
});

export const modalTitle = style({
  color: theme.COLORS.black,
  ...theme.FONTS.h2Sb20,
});

export const modalBody = style({
  color: theme.COLORS.gray7,
  ...theme.FONTS.b9R15,
});

export const btnBox = style({
  display: 'flex',
  gap: '0.9rem',
  width: '29.1rem',
  height: '5rem',
});

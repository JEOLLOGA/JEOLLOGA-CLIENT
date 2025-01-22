import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const modalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.8rem',

  width: '33.1rem',
  height: '18.1rem',
  padding: '3rem 2rem 2rem',

  borderRadius: '8px',
  backgroundColor: theme.COLORS.white,
  zIndex: 4,
});

export const modalBackdrop = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 3,
  width: '100%',
  height: '100vh',
  background: theme.COLORS.black60,

  marginTop: '-1.2rem',
});

export const modalTextBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',

  width: '22rem',
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

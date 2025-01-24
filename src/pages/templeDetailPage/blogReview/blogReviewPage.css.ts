import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerBox = style({
  position: 'fixed',
  top: 0,
  width: '37.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '1rem',
  marginBottom: '1rem',
  zIndex: 2,
  backgroundColor: theme.COLORS.white,
});

export const reviewComponent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  overflow: 'hidden',
  paddingTop: '5rem',
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

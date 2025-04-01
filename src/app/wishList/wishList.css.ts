import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  paddingBottom: '4.4rem',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  justifyItems: 'center',
});

export const headerBox = style({
  position: 'fixed',
  top: 0,
  paddingTop: '1.2rem',
  width: '37.5rem',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 5,
  backgroundColor: theme.COLORS.white,
});

export const contentBox = style({
  paddingTop: '4.2rem',
});

export const emptyBox = style({
  paddingTop: '7.2rem',
});

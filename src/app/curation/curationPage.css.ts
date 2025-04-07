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

export const contentBox = style({
  paddingTop: '4.8rem',
});

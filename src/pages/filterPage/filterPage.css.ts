import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'sticky',
  top: 0,
  background: theme.COLORS.white,
});

export const main = style({
  padding: '0 2rem',
  marginBottom: '7rem',
});

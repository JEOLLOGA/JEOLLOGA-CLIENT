import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100vh',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateRows: 'auto 1fr auto',
  paddingBottom: '4.5rem',
});

export const titleStyle = style({
  ...theme.FONTS.h1Sb24,
  margin: '6.8rem 4.9rem 4.4rem 4.9rem',
  textAlign: 'center',
  whiteSpace: 'pre-line',
});

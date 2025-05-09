import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '1.1rem 2rem',
  height: '5.8rem',
  marginTop: '0.8rem',
  width: '100%',
});

export const scrollContainer = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
});

export const titleStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '4rem',
  marginBottom: '1.2rem',
  marginTop: '1.4rem',
  ...theme.FONTS.h3Sb18,
  color: theme.COLORS.black,
});

import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '3.4rem 2rem 4.4rem 2rem',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  justifyItems: 'center',
});

export const titleLayout = style({
  width: '100%',
  height: '9.3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '3.5rem',
});

export const titleStyle = style({
  ...theme.FONTS.h1Sb24,
  whiteSpace: 'pre-line',
});

export const descriptionStyle = style({
  ...theme.FONTS.b8M15,
  color: theme.COLORS.gray6,
});

export const selectContainer = style({
  width: '31.9rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.1rem 0.9rem',
});

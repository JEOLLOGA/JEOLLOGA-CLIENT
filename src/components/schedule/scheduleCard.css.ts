import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  display: 'flex',
  width: '33.5rem',
  padding: '0.6rem 1.4rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: 8,
  backgroundColor: theme.COLORS.gray1,
});

export const dayStyle = style({
  ...theme.FONTS.c1Sb15,
  color: theme.COLORS.black,
  width: '30.7rem',
  height: '4.1rem',
  paddingTop: '0.8rem',
  borderBottom: `0.1rem solid ${theme.COLORS.gray3}`,
});

export const programItem = style({
  display: 'flex',
  gap: '1.2rem',
  padding: '0.6rem 0',
  width: '30.7rem',
  borderBottom: `0.1rem solid ${theme.COLORS.gray3}`,
});

export const timeStyle = style({
  ...theme.FONTS.b9R15,
  color: theme.COLORS.gray10,
  width: '9rem',
  fontFeatureSettings: "'tnum'",
  fontVariantNumeric: 'tabular-nums',
});

export const description = style({
  ...theme.FONTS.b8M15,
  color: theme.COLORS.black,
  width: '20.5rem',
});

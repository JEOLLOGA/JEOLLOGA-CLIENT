import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const footerContainer = style({
  width: '37.5rem',
  height: '18.7rem',
  padding: '2rem',
  position: 'absolute',
  bottom: 0,
  backgroundColor: theme.COLORS.gray1,
});

export const topBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  marginBottom: '4.8rem',
});

export const topBoxText = style({
  ...theme.FONTS.f3R10,
  color: theme.COLORS.gray6,
});

export const infoContainer = style({
  width: '2.7rem',
  height: '4.4rem',
  ...theme.FONTS.f2Sb10,
});

export const contentContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.6rem',
  marginBottom: '1rem',
  gap: '0.6rem',
});

export const contentTitle = style({
  ...theme.FONTS.f2Sb10,
  color: theme.COLORS.gray6,

  width: '2.7rem',
});

export const contentBody = style({
  ...theme.FONTS.f3R10,
  color: theme.COLORS.gray6,
});

export const bottomContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  ...theme.FONTS.f1Sb11,
  color: theme.COLORS.gray11,
});

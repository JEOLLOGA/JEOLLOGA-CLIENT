import theme from '@styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '4rem 1fr 4rem',
  width: '33.5rem',
  height: '5.2rem',
  alignItems: 'center',

  background: theme.COLORS.white,
  paddingTop: '1.2rem',
  margin: '-1.2rem 2rem 1rem',
});

export const buttonLayout = style({
  width: '4rem',
  height: '4rem',
});

globalStyle(`${buttonLayout} svg`, {
  width: '2.4rem',
  height: '2.4rem',
});

export const titleStyle = style({
  gridColumn: '2',
  textAlign: 'center',
  width: '20.3rem',
  margin: '0 auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ...theme.FONTS.h3Sb18,
  color: theme.COLORS.black,
});

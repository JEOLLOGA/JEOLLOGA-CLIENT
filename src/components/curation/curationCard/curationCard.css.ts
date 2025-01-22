import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  width: '28.5rem',
  height: '26.8rem',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end',
  flexShrink: 0,

  padding: '1.6rem',
  color: theme.COLORS.white,
});

export const textbox = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
});

export const title = style({
  ...theme.FONTS.h3Sb18,
  whiteSpace: 'pre-line',
});

export const subtitle = style({
  ...theme.FONTS.b9R15,
});

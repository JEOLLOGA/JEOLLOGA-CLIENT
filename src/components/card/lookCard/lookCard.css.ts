import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '33.5rem',
  height: '33.1rem',
  borderRadius: 8,
  padding: '2rem',
  marginTop: '1.2rem',
});

export const textBox = style({
  ...theme.FONTS.b0R22,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const name = style({
  ...theme.FONTS.h0Sb22,
});

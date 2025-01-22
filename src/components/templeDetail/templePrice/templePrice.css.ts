import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const templePriceWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const templePriceBox = style({
  display: 'flex',
  gap: '1rem',
});

export const adultString = style({
  ...theme.FONTS.b7R16,
});

export const priceString = style({
  ...theme.FONTS.h5Sb16,
});

import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const titleContainerStyle = style({
  width: '33.5rem',
  height: '3.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const buttonStyle = style({
  ...theme.FONTS.c6R13,
  color: theme.COLORS.gray9,

  selectors: {
    '&:disabled': {
      color: theme.COLORS.gray5,
      cursor: 'not-allowed',
    },
  },
});

export const titleStyle = recipe({
  variants: {
    size: {
      small: {
        ...theme.FONTS.h5Sb16,
      },
      medium: {
        ...theme.FONTS.h2Sb20,
      },
    },
  },
});

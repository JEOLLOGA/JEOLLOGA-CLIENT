import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const btnStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '14.1rem',

    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '1.4rem 1rem',

    ...theme.FONTS.h5Sb16,
    cursor: 'pointer',
  },

  variants: {
    color: {
      green: {
        backgroundColor: theme.COLORS.primary400,
        color: theme.COLORS.white,
      },
      gray: {
        backgroundColor: theme.COLORS.gray1,
        color: theme.COLORS.gray7,
      },
    },
  },
});

export default btnStyle;

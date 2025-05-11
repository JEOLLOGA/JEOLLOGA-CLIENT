import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const ButtonStyle = recipe({
  base: {
    cursor: 'pointer',
    padding: '10px 0',
    ...theme.FONTS.h5Sb16,
  },
  variants: {
    isActive: {
      true: {
        color: theme.COLORS.black,
        boxShadow: `inset 0 -1px 0 0 ${theme.COLORS.black}`,
      },
      false: {
        color: theme.COLORS.gray9,
        boxShadow: 'none',
      },
    },
  },
});

export default ButtonStyle;

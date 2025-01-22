import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const indexStyle = recipe({
  base: {
    width: '0.6rem',
    height: '0.6rem',
    borderRadius: '100%',
    backgroundColor: theme.COLORS.gray3,
  },
  variants: {
    state: {
      active: {
        backgroundColor: theme.COLORS.gray11,
      },
      inactive: {},
    },
  },
  defaultVariants: {
    state: 'inactive',
  },
});

export const indexContainer = style({
  display: 'flex',
  gap: '0.4rem',
  marginTop: '0.8rem',
});

export default indexStyle;

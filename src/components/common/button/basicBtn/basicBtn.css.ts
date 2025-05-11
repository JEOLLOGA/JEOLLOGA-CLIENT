import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40px',
    boxSizing: 'border-box',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: theme.COLORS.white,
        color: theme.COLORS.green5,
        border: `1px solid ${theme.COLORS.green3}`,

        selectors: {
          '&:hover': {
            backgroundColor: theme.COLORS.green1,
            color: theme.COLORS.green5,
            border: `1px solid ${theme.COLORS.green4}`,
          },
        },
      },
      grayOutlined: {
        backgroundColor: theme.COLORS.white,
        color: theme.COLORS.gray7,
        border: `1px solid ${theme.COLORS.gray2}`,

        selectors: {
          '&:hover': {
            backgroundColor: theme.COLORS.gray1,
            color: theme.COLORS.gray7,
            border: `1px solid ${theme.COLORS.gray1}`,
          },
        },
      },
      blackOutlined: {
        backgroundColor: theme.COLORS.white,
        color: theme.COLORS.gray10,
        border: `1px solid ${theme.COLORS.gray3}`,

        selectors: {
          '&:hover': {
            color: theme.COLORS.gray10,
            border: `1px solid ${theme.COLORS.gray7}`,
          },
        },
      },
      lightGrayOutlined: {
        backgroundColor: theme.COLORS.white,
        color: theme.COLORS.gray10,
        border: `1px solid ${theme.COLORS.gray3}`,

        selectors: {
          '&:hover': {
            backgroundColor: theme.COLORS.gray2,
            border: `1px solid ${theme.COLORS.gray3}`,
          },
        },
      },
      green: {
        backgroundColor: theme.COLORS.green4,
        color: theme.COLORS.white,

        selectors: {
          '&:hover': {
            backgroundColor: theme.COLORS.primary600,
          },
        },
      },
    },

    size: {
      large: {
        height: '4.1rem',
        padding: '1rem 1.4rem',
        ...theme.FONTS.b8M15,
        gap: '0.4rem',
      },
      medium: {
        height: '3.6rem',
        padding: '0.8rem 1.2rem',
        ...theme.FONTS.c4M14,
        gap: '0.2rem',
      },
      small: {
        height: '3rem',
        padding: '0.6rem 0.8rem',
        ...theme.FONTS.c2R14,
        gap: '0.1rem',
      },
    },

    active: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { color: 'primary', active: true },
      style: {
        backgroundColor: theme.COLORS.green4,
        color: theme.COLORS.white,
      },
    },
    {
      variants: { color: 'grayOutlined', active: true },
      style: {
        border: `1px solid ${theme.COLORS.gray8}`,
        color: theme.COLORS.gray11,
      },
    },
    {
      variants: { color: 'blackOutlined', active: true },
      style: {
        border: `1px solid ${theme.COLORS.gray11}`,
        color: theme.COLORS.gray11,
      },
    },
    {
      variants: { color: 'lightGrayOutlined', active: true },
      style: {
        border: `1px solid ${theme.COLORS.gray7}`,
        color: theme.COLORS.gray10,
      },
    },
    {
      variants: { color: 'blackOutlined', size: 'medium' },
      style: {
        height: '3.7rem',
        ...theme.FONTS.b8M15,
      },
    },
  ],

  defaultVariants: {
    active: false,
  },
});

export default buttonStyle;

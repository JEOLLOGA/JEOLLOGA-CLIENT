import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const cardContainer = recipe({
  base: {
    overflow: 'hidden',
    border: `1px solid ${theme.COLORS.gray2}`,
    backgroundColor: theme.COLORS.white,
    selectors: {
      '&:hover': {
        filter: 'brightness(96%)',
      },
    },
  },
  variants: {
    size: {
      small: {
        width: '24rem',
        height: '20rem',
        borderRadius: 5,
      },
      large: {
        width: '33.5rem',
        height: '23.2rem',
        borderRadius: 4,
      },
    },
  },
});

export const cardImage = recipe({
  base: {
    objectFit: 'cover',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  },
  variants: {
    size: {
      small: {
        height: '11.5rem',
      },
      large: {
        height: '11.8rem',
      },
    },
  },
});

export const emptyImage = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.gray2,
    width: '100%',
  },
  variants: {
    size: {
      small: {
        height: '11.5rem',
      },
      large: {
        height: '11.8rem',
      },
    },
  },
});

export const cardContent = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 1.2rem',
    gap: '1.2rem',
  },
  variants: {
    size: {
      small: {
        height: '8.5rem',
      },
      large: {
        height: '11.4rem',
      },
    },
  },
});

export const cardTitle = recipe({
  base: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },
  variants: {
    size: {
      small: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        height: '4.2rem',
        marginTop: '0.6rem',
        ...theme.FONTS.c1Sb15,
      },
      large: {
        marginTop: '1rem',
        marginBottom: '0.4rem',
        whiteSpace: 'nowrap',
        width: '31.1rem',
        ...theme.FONTS.h3Sb18,
      },
    },
  },
});

export const cardBody = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  height: '3.6rem',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',

  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray8,
});

import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const verticalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '16.3rem',
  height: '27.7rem',
  cursor: 'pointer',
});

export const horizontalContainer = style({
  position: 'relative',
  display: 'flex',
  gap: '1.2rem',
  width: '33.5rem',
  height: '13.5rem',

  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: theme.COLORS.white,
});

export const horizontalImgSection = style({
  width: '12rem',
  height: '13.5rem',
});

export const verticalImgSection = style({
  position: 'relative',
  width: '16.3rem',
  height: '17.2rem',
});

export const verticalImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '4px',

  transition: '0.15s ease-out',

  selectors: {
    [`${verticalContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});

export const horizontalImage = style({
  width: '12rem',
  height: '13.5rem',
  objectFit: 'cover',
  borderRadius: '4px 0 0 4px',

  transition: '0.15s ease-out',

  selectors: {
    [`${horizontalContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});

export const wishBtn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  right: '0',

  width: '4rem',
  height: '4rem',

  zIndex: '2',
});

export const horizontalEmptyImgSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12rem',
  height: '13.5rem',
  objectFit: 'cover',
  borderRadius: '4px 0 0 4px',
  backgroundColor: theme.COLORS.gray2,

  transition: '0.15s ease-out',

  selectors: {
    [`${verticalContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});

export const verticalEmptyImgSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16.3rem',
  height: '17.2rem',
  objectFit: 'cover',
  borderRadius: 4,
  backgroundColor: theme.COLORS.gray2,

  transition: '0.15s ease-out',

  selectors: {
    [`${horizontalContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});

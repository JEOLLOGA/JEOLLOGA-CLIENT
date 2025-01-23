import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  width: '28.5rem',
  height: '26.8rem',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  flexShrink: 0,
  padding: '1.6rem',
  color: theme.COLORS.white,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: theme.COLORS.gradient,
      zIndex: 1,
    },
  },
});

export const textbox = style({
  position: 'relative',
  zIndex: 2,
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

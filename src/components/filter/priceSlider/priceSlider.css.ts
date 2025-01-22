import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sliderContainer = style({
  position: 'relative',
  width: '33.5rem',
  height: '3.2rem',
  overflow: 'hidden',
});

export const track = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '100%',
  height: '0.4rem',

  background: theme.COLORS.gray2,
  borderRadius: '999px',
});

export const highlight = style({
  position: 'absolute',
  height: '100%',

  background: theme.COLORS.primary400,
  borderRadius: '4px',
});

export const thumb = style({
  position: 'absolute',
  top: '50%',
  width: '100%',

  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  appearance: 'none',
  background: 'none',
  margin: 0,
  touchAction: 'none',

  selectors: {
    '&::-webkit-slider-thumb': {
      pointerEvents: 'auto',
      appearance: 'none',
      width: '2.8rem',
      height: '2.8rem',
      borderRadius: '50%',
      background: 'white',
      border: `2px solid ${theme.COLORS.primary400}`,
      cursor: 'pointer',
    },
  },
});

export const titleStyle = style({
  color: theme.COLORS.black,
  ...theme.FONTS.h2Sb20,
});

export const priceSlider = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',

  width: '33.5rem',
});

export const priceBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  marginTop: '-1rem',
});

export const textStyle = recipe({
  base: {
    flexBasis: '33.3%',
    color: theme.COLORS.gray5,
    ...theme.FONTS.c7R12,
  },
  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
});

export const descriptionStyle = style({
  color: theme.COLORS.gray6,
  ...theme.FONTS.c2R14,

  margin: '-2.2rem 0 3.4rem',
});

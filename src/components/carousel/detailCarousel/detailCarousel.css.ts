import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  display: 'flex',
  height: '21rem',
  width: '33.5rem',
  overflow: 'hidden',
  touchAction: 'none',
  cursor: 'pointer',
});

export const imageContainer = style({
  display: 'flex',
  gap: '2rem',
});

export const imageBox = style({
  display: 'flex',
  position: 'relative',
  flexShrink: 0,
});

export const imageStyle = style({
  width: '33.5rem',
  objectFit: 'cover',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 4,
});

export const numberStyle = style({
  position: 'absolute',
  bottom: '0.8rem',
  right: '0.8rem',
  zIndex: 2,
});

export const emptyImageContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '21rem',
  width: '33.5rem',
  backgroundColor: theme.COLORS.gray2,
  borderRadius: 4,
});

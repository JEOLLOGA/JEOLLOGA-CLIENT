import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const flexCenterColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const homeWrapper = flexCenterColumn;

export const curationCarouselStyle = style([
  flexCenterColumn,
  {
    gap: '0.8rem',
    marginTop: '5.4rem',
    touchAction: 'none',
  },
]);

export const popularCarouselStyle = style([
  flexCenterColumn,
  {
    gap: '0.8rem',
    margin: '5.4rem 0 28rem 0',
    touchAction: 'none',
  },
]);

export const modalOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'calc(100% + 1.2rem)',
  marginTop: '-1.2rem',
  backgroundColor: theme.COLORS.black60,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
});

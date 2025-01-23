import { style } from '@vanilla-extract/css';

const flexCenterColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  touchAction: 'none',
});

export const homeWrapper = flexCenterColumn;

export const curationCarouselStyle = style([
  flexCenterColumn,
  {
    gap: '0.8rem',
    marginTop: '5.4rem',
  },
]);

export const popularCarouselStyle = style([
  flexCenterColumn,
  {
    gap: '0.8rem',
    margin: '5.4rem 0 28rem 0',
  },
]);

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
});

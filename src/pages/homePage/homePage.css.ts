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

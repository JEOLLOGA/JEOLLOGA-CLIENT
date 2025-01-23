import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const mapContainerWrapper = style({
  paddingBottom: '13rem',
});

export const addressWord = style({
  width: '26rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const mapContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const addressDetailStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '33.5rem',
  height: '3.4rem',

  ...theme.FONTS.b9R15,
  color: theme.COLORS.gray11,
});

export const mapStyle = style({
  width: '33.5rem',
  height: '21.2rem',
});

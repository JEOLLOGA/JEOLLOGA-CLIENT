import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  width: '37.5rem',
  height: '6.4rem',
  paddingTop: '1.2rem',
});

export const backButton = style({
  width: '4rem',
  height: '4rem',
  marginLeft: '1.2rem',
});

export const emptyBox = style({
  width: '4rem',
  height: '4rem',
});

export const barContainer = style({
  width: '100%',
  height: '0.2rem',
  backgroundColor: theme.COLORS.gray1,
  overflow: 'hidden',
});

export const barStyle = style({
  height: '100%',
  backgroundColor: theme.COLORS.primary400,
  transition: 'width 0.3s ease-in-out',
});

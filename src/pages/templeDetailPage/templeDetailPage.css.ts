import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const templeDetailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.8rem',
});

export const headerBox = style({
  position: 'fixed',
  top: 0,
  paddingTop: '1.2rem',
  width: '37.5rem',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 2,
  backgroundColor: theme.COLORS.white,
});

export const topDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  paddingTop: '5.2rem',
});

export const stickyTapBar = style({
  position: 'fixed',
  top: '5.2rem',
  zIndex: 2,
  backgroundColor: 'white',
  transition: 'all 0.3s ease-in-out',
});

export const templeTitleBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
});

export const templeDetailMiddle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5.2rem',
  marginBottom: '0.7rem',
});

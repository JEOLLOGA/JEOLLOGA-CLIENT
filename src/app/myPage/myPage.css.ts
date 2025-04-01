import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const myPageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const userInfoContainer = style({
  minHeight: '75rem',
  position: 'relative',
});

export const modalOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'calc(100% + 1.2rem)',
  backgroundColor: theme.COLORS.black60,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-1.2rem',
});

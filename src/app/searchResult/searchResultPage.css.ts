import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: theme.COLORS.gray1,
  position: 'relative',
});

export const headerContainer = style({
  boxShadow: theme.COLORS.filerDropshadow,
  backgroundColor: theme.COLORS.white,
  position: 'fixed',
  top: 0,
  width: '37.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '1rem',
  marginBottom: '1rem',
  zIndex: 3,
});

export const bodyContainer = style({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  justifyItems: 'center',
  minHeight: 'calc(100vh - 12.2rem)',
  paddingTop: '12.2rem',
  paddingBottom: '4.4rem',
  gap: '3.2rem',
});

export const emptyContainer = style({
  paddingTop: '12.2rem',
});

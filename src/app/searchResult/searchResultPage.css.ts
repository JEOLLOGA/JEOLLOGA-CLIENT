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
});

export const cardListWrapper = style({
  margin: '0.8rem 0 3.2rem 0',
});

export const sortWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '2rem',
});

export const emptyContainer = style({
  paddingTop: '12.2rem',
});

export const sortSheetContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'flex-start',
  padding: '1.4rem 0 3.4rem 0',
});

export const sortOptionButton = style({
  width: '33.5rem',
  color: theme.COLORS.gray8,
  cursor: 'pointer',
  ...theme.FONTS.h5Sb16,
  padding: '1.3rem 0',
  textAlign: 'left',
});

export const active = style({
  color: theme.COLORS.black,
});

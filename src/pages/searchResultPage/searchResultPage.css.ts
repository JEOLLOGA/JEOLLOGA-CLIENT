import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: theme.COLORS.gray1,
});

export const headerContainer = style({
  boxShadow: theme.COLORS.filerDropshadow,
  backgroundColor: theme.COLORS.white,
});

export const bodyContainer = style({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  justifyItems: 'center',
  minHeight: 'calc(100vh - 12.2rem)',
  paddingTop: '2rem',
  paddingBottom: '4.4rem',
  gap: '3.2rem',
});

import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const templeScheduleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '33.5rem',
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '35.2rem',
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray7,
});

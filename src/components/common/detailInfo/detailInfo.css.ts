import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const infoBox = style({
  width: '33.5rem',
  padding: '1.2rem 1.4rem',
  display: 'flex',
  gap: '0.8rem',
  borderRadius: '4px',
  backgroundColor: theme.COLORS.gray1,
});

export const title = style({
  ...theme.FONTS.c3Sb14,
  color: theme.COLORS.gray11,
});

export const content = style({
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray10,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordBreak: 'break-all',
  overflow: 'hidden',
  width: '27.4rem',
});

import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const mapWrapper = style({
  borderRadius: 8,
  backgroundColor: theme.COLORS.green6,
  width: '33.5rem',
  padding: '2.4rem 0 2.8rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1.4rem',
});

export const titleBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  ...theme.FONTS.b6M16,
  color: theme.COLORS.gray9,
});

import theme from '@styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const exceptWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem',
  height: '100vh',
});

export const title = style({
  ...theme.FONTS.h4Sb17,
});

export const imgContainer = style({
  width: '21rem',
  height: '21rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const subtitle = styleVariants({
  loading: {
    ...theme.FONTS.h4Sb17,
  },
  networkError: {
    ...theme.FONTS.b9R15,
    color: theme.COLORS.gray10,
  },
});

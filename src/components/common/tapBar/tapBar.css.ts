import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const tapBarContainer = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '37.5rem',
  height: '4.2rem',
  padding: '0 2rem',

  background: theme.COLORS.white,
  boxShadow: theme.COLORS.filerDropshadow,
});

export default tapBarContainer;

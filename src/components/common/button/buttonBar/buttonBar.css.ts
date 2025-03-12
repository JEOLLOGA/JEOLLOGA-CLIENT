import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const buttonBarContainer = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 100,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '37.5rem',
  height: '7.2rem',
  padding: '1rem 2rem',
  boxSizing: 'border-box',
  background: theme.COLORS.white,

  boxShadow: `0px -4px 16px 0px rgba(0, 0, 0, 0.05)`,
});

export default buttonBarContainer;

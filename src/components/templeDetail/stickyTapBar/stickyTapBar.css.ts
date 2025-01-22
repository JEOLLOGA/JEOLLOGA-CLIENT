import { style } from '@vanilla-extract/css';

const stickyTapBar = style({
  position: 'fixed',
  top: '5.2rem',
  zIndex: 2,
  backgroundColor: 'white',
  transition: 'all 0.3s ease-in-out',
});

export default stickyTapBar;

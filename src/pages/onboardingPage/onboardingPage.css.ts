import { style } from '@vanilla-extract/css';

const container = style({
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export default container;

import { style } from '@vanilla-extract/css';

const container = style({
  height: 'calc(var(--vh, 1vh) * 100)',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export default container;

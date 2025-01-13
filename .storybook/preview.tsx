import '../src/styles/fonts.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';

import type { Preview } from '@storybook/react';
import '../src/styles/fonts.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

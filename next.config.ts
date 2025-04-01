import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import type { NextConfig } from 'next';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const nextConfig: NextConfig = {
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        memo: true,
      },
      include: '**/*.svg',
    }),
    tsconfigPaths(),
  ],
};

export default nextConfig;

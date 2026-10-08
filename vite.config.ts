import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolio } from './src/data/portfolio';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'portfolio-metadata',
      transformIndexHtml() {
        return [
          { tag: 'title', children: `${portfolio.profile.name} — Portfolio`, injectTo: 'head' },
          {
            tag: 'meta',
            attrs: { name: 'description', content: portfolio.description },
            injectTo: 'head',
          },
        ];
      },
    },
  ],
  publicDir: 'Public',
});

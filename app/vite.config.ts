import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      imagetools({
        removeMetadata: true,
      }),
      ViteImageOptimizer({
        /* pass your config */
      }),
      reactRouter(),
    ],
  };
});
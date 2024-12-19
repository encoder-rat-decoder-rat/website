import { imagetools } from 'vite-imagetools'
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      reactRouter(),
      imagetools({
        removeMetadata: true,
      }),
    ],
  };
});
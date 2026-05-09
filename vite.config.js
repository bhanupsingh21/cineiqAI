import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        workspace: resolve(__dirname, 'workspace.html'),
        login:     resolve(__dirname, 'login.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

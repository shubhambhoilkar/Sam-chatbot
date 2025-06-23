import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:"/",
  plugins: [react()],
  server: {
    host: '0.0.0.0',        // ✅ Correct key: host
    port: 5173,
    strictPort: true,
    allowedHosts: 'all',  // ✅ Add your cloudflare tunnel host here
    hmr: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: 'all',
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Serve static assets like /images directly from Vite's public dir.
  // Removing proxy avoids 500s when requesting images during dev.
});
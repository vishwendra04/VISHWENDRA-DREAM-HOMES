import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    /** If you set esmExternals to true, this plugin assumes that 
      all external dependencies are ES modules */
    commonjsOptions: {
      esmExternals: true
    },
  },
});

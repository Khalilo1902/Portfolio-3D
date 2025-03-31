import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',  // Verwende 'ws' für unsichere WebSocket-Verbindung
      host: 'khalil-webdev.de',
      port: 3505,
    },
  },
})
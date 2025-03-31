import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'wss',  // Nutze 'wss' für sichere WebSocket-Verbindungen
      host: 'khalil-webdev.de',  // Dein Hostname
      port: 3505,  // Port für WebSocket-Verbindung
    },
  },
});

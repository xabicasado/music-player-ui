import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/music-player-ui',
  plugins: [react()],
  // https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTests.ts'],
  },
})

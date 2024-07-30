import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
//   base: '/online_restaurant_react',
// });
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), svgr()],
    base: command === 'serve' ? '/' : '/online_restaurant_react/',
  };
});

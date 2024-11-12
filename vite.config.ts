import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/trishaqk.github.io/",
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    }
  }
})



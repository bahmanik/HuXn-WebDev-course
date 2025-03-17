setting up react
bun create vite@latest

installing framer motion
<!-- bun install framer-motion -->

installing vite
<!-- bun install tailwindcss @tailwindcss/vite -->

Add the <!-- @tailwindcss/vite --> plugin to your Vite configuration.
EXAMPLE
<!-- import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
}) -->

Import Tailwind CSS

Add an <!-- @import --> to your CSS file that imports Tailwind CSS.
<!-- @import "tailwindcss"; -->

test
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

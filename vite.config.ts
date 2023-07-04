import {deepkitType} from "@deepkit/vite";
import {defineConfig} from 'vite';

console.log("vite.config.ts")
export default defineConfig({
  plugins: [deepkitType()],
  esbuild: {
    banner: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
  },
  ssr: {optimizeDeps: {disabled: true}},
  build: {
    "modulePreload": false,
    minify: false,
    target: "esnext",
    rollupOptions: {
      "preserveEntrySignatures": "strict",
      "output": {
        "preserveModules": true,
        "esModule": true,
        "format": "esm",
      },
      "input": {
        "tests": "./src/tests.ts"
      }
    }
  },
});

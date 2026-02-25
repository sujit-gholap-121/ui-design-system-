import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: { resolve: true },
  tsconfig: './tsconfig.build.json',
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
})

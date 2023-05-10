import { defineConfig } from 'tsup'

export default defineConfig((opts) => ({
  entry: ['index.ts', './lib'],
  splitting: true,
  format: ['esm', 'cjs'],
  dts: true,
  clean: !opts.watch,
  sourcemap: true,
  minify: true,
  outDir: 'dist',
  target: 'es2020'
}))
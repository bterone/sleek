import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/js/index.js'],
  bundle: true,
  sourcemap: true,
  outdir: 'dist',
  minify: true,
  format: 'esm',
  target: 'es2020'
}).catch(() => process.exit(1))

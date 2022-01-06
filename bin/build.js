import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['sleekCss.js'],
  bundle: true,
  sourcemap: true,
  outdir: 'dist',
  minify: true,
  format: 'esm',
  target: 'es2020'
}).catch(() => process.exit(1))

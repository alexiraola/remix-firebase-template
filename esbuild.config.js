import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./functions/src/index.ts'],
  outdir: './build',
  bundle: true,
  format: 'esm',
  target: ['node16'],
  splitting: true,
  platform: 'node',
  loader: { '.ts': 'ts' },
  logLevel: 'info',
  packages: 'external'
});

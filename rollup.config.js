import typescript from '@rollup/plugin-typescript';

export default {
  input: 'functions/src/index.ts',
  output: {
    dir: 'build',
    format: 'esm',
  },
  external: [
    "*"
  ],
  plugins: [
    typescript({
      tsconfig: './functions/tsconfig.json',
    }),
  ],
  preserveEntrySignatures: 'strict',
  treeshake: {
    moduleSideEffects: false,
  },
};

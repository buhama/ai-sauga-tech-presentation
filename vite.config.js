import { createHash } from 'crypto';

// Polyfill for crypto.hash bug in Vite 7 / @vitejs/plugin-vue 6
// See: https://github.com/vitejs/vite/issues/20287
globalThis.crypto = {
  ...globalThis.crypto,
  hash: (algorithm, data, encoding = 'hex') => {
    const hash = createHash(algorithm);
    hash.update(data);
    return hash.digest(encoding);
  },
};

export default {};
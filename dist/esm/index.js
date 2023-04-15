import { registerPlugin } from '@capacitor/core';
const PublicKeyPinning = registerPlugin('PublicKeyPinning', {
    web: () => import('./web').then(m => new m.PublicKeyPinningWeb()),
});
export * from './definitions';
export { PublicKeyPinning };
export { setPublicKeyPinning, clearPublicKeyPinning } from './public-key-pinning';
//# sourceMappingURL=index.js.map
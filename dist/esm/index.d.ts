import type { PublicKeyPinningPlugin } from './definitions';
declare const PublicKeyPinning: PublicKeyPinningPlugin;
export * from './definitions';
export { PublicKeyPinning };
export { setPublicKeyPinning, clearPublicKeyPinning } from './public-key-pinning';

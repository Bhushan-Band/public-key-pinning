import { registerPlugin } from '@capacitor/core';

import type { PublicKeyPinningPlugin } from './definitions';

const PublicKeyPinning = registerPlugin<PublicKeyPinningPlugin>('PublicKeyPinning', {
  web: () => import('./web').then(m => new m.PublicKeyPinningWeb()),
});

export * from './definitions';
export { PublicKeyPinning };

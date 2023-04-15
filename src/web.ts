import { WebPlugin } from '@capacitor/core';

import type { PublicKeyPinningPlugin } from './definitions';

export class PublicKeyPinningWeb extends WebPlugin implements PublicKeyPinningPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

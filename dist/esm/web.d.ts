import { WebPlugin } from '@capacitor/core';
import type { PublicKeyPinningPlugin } from './definitions';
export declare class PublicKeyPinningWeb extends WebPlugin implements PublicKeyPinningPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

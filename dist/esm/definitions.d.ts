export interface PublicKeyPinningPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

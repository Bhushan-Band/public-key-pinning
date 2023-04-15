import { Capacitor } from '@capacitor/core';
// let listenerHandle: PluginListenerHandle;
export function setPublicKeyPinning(certificates) {
    return new Promise((resolve, reject) => {
        if (Capacitor.addListener) {
            Capacitor.addListener('com.mmtpkp.plugin', 'onPinnedCertificateSet', () => {
                resolve();
            });
        }
        Capacitor.Plugins.Certificate.setPinnedCertificates(certificates)
            .then(() => {
            // Do nothing - the success event will be handled by the listener
        })
            .catch(() => {
            reject(new Error('Failed to set pinned certificates'));
        });
    });
}
export function clearPublicKeyPinning() {
    return new Promise((resolve, reject) => {
        if (Capacitor.addListener) {
            Capacitor.addListener('com.mmtpkp.plugin', 'onPinnedCertificateCleared', () => {
                resolve();
            });
        }
        Capacitor.Plugins.Certificate.clearPinnedCertificates()
            .then(() => {
            // Do nothing - the success event will be handled by the listener
        })
            .catch(() => {
            reject(new Error('Failed to clear pinned certificates'));
        });
    });
}
//# sourceMappingURL=public-key-pinning.js.map
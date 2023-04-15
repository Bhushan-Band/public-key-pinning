'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

// let listenerHandle: PluginListenerHandle;
function setPublicKeyPinning(certificates) {
    return new Promise((resolve, reject) => {
        if (core.Capacitor.addListener) {
            core.Capacitor.addListener('com.mmtpkp.plugin', 'onPinnedCertificateSet', () => {
                resolve();
            });
        }
        core.Capacitor.Plugins.Certificate.setPinnedCertificates(certificates)
            .then(() => {
            // Do nothing - the success event will be handled by the listener
        })
            .catch(() => {
            reject(new Error('Failed to set pinned certificates'));
        });
    });
}
function clearPublicKeyPinning() {
    return new Promise((resolve, reject) => {
        if (core.Capacitor.addListener) {
            core.Capacitor.addListener('com.mmtpkp.plugin', 'onPinnedCertificateCleared', () => {
                resolve();
            });
        }
        core.Capacitor.Plugins.Certificate.clearPinnedCertificates()
            .then(() => {
            // Do nothing - the success event will be handled by the listener
        })
            .catch(() => {
            reject(new Error('Failed to clear pinned certificates'));
        });
    });
}

const PublicKeyPinning = core.registerPlugin('PublicKeyPinning', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PublicKeyPinningWeb()),
});

class PublicKeyPinningWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PublicKeyPinningWeb: PublicKeyPinningWeb
});

exports.PublicKeyPinning = PublicKeyPinning;
exports.clearPublicKeyPinning = clearPublicKeyPinning;
exports.setPublicKeyPinning = setPublicKeyPinning;
//# sourceMappingURL=plugin.cjs.js.map

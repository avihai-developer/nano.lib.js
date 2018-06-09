import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";

export class NanoLib {

    static generateNewUser() {
        let seed = this.generateNewSeed();
        let privateKey = this.getPrivateKey(seed, 0);
        let publicKey = this.getPublicKey(privateKey);
        let account = this.getAccount(publicKey);
        return {
            seed: seed,
            privateKey: privateKey,
            publicKey: publicKey,
            account: account
        }
    }

    static generateNewSeed(): string {
        let seed = "";
        while (seed.length < 64) {
            var uint8Array = cryptoBrowserify.randomBytes(1);
            var char = uint8Array[0].toString(16).toUpperCase();
            if (char.length > 1) {
                seed = seed + char;
            }
        }
        return seed;
    }

    static getPrivateKey(seed: string, index: number): string {
        return '';
    }

    static getPublicKey(privateKey: string): string {
        return '';
    }

    static getAccount(publicKey: string): string {
        return '';
    }
}

import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";

export class NanoLib {

    static generateNewUser(): object {
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
        let uint8Array = cryptoBrowserify.randomBytes(32);
        uint8Array.forEach((item: number) => {
            let chars = item.toString(16).toUpperCase();
            if(chars.length === 1) {
                chars = "0" + chars;
            }
            seed = seed + chars;
        });
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

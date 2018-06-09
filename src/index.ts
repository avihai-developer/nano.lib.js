export class NanoLib {

    static generateNewUser() {
        let seed = NanoLib.generateNewSeed();
        let privateKey = NanoLib.getPrivateKey(seed, 0);
        let publicKey = NanoLib.getPublicKey(privateKey);
        let account = NanoLib.getAccount(publicKey);
        return {
            seed: seed,
            privateKey: privateKey,
            publicKey: publicKey,
            account: account
        }
    }

    static generateNewSeed(): string {
        return '';
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

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

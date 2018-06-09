export class NanoLib {

    generateNewUser() {
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

    generateNewSeed(): string {
        return '';
    }

    getPrivateKey(seed: string, index: number): string {
        return '';
    }

    getPublicKey(privateKey: string): string {
        return '';
    }

    getAccount(publicKey: string): string {
        return '';
    }
}

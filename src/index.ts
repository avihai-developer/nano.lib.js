import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";
import * as blake from "../node_modules/blakejs/index";
import {Converters} from "./converters"

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
        let seed;
        let uint8Array = cryptoBrowserify.randomBytes(32);
        seed = Converters.uint8ToHex(uint8Array);
        return seed;
    }

    static getPrivateKey(seed: string, index: number): string {
        let privateKeyUnit8: any;
        let seedUint8 = Converters.hexToUint8(seed);
        let indexUnit8 = Converters.hexToUint8(Converters.decToHex(index, 4));
        const context = blake.blake2bInit(32);
        blake.blake2bUpdate(context, seedUint8);
        blake.blake2bUpdate(context, indexUnit8);
        privateKeyUnit8 = blake.blake2bFinal(context);
        const privateKry = Converters.uint8ToHex(privateKeyUnit8);
        return privateKry;
    }

    static getPublicKey(privateKey: string): string {
        let privateKeyUnit8 = Converters.hexToUint8(privateKey);
        return '';
    }

    static getAccount(publicKey: string): string {
        return '';
    }
}
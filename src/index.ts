import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";
import * as blake from "../node_modules/blakejs/index";
import * as nacl from "./libs/nacl";
import * as crypto from "crypto";
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
        let uint8Array;
        if (window) {
            uint8Array = cryptoBrowserify.randomBytes(32);
        } else {
            uint8Array = crypto.randomBytes(32);
        }
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
        const privateKey = Converters.uint8ToHex(privateKeyUnit8);
        return privateKey;
    }

    static getPublicKey(privateKey: string): string {
        let privateKeyUnit8 = Converters.hexToUint8(privateKey);
        let newNacl: any;
        newNacl = nacl;
        let publicKeyUnit8 = newNacl.sign.keyPair.fromSecretKey(privateKeyUnit8);
        const publicKey = Converters.uint8ToHex(publicKeyUnit8);
        return publicKey;
    }

    static getAccount(publicKey: string): string {
        var key_bytes = Converters.uint4ToUint8( Converters.hexToUint4 (publicKey) );
        var checksum = Converters.uint5ToString( Converters.uint4ToUint5( Converters.uint8ToUint4( blake.blake2b(key_bytes, null, 5).reverse() ) ) );
        var c_account = Converters.uint5ToString( Converters.uint4ToUint5( Converters.hexToUint4 ('0'+publicKey) ) );
        let account = 'nano_' + c_account + checksum;
        return account;
    }
}
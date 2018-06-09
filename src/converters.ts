export class Converters {

    static uint8ToHex(unit8Array: number[]): string {
        let hex = '';
        for (let i = 0; i < unit8Array.length; i++) {
            let aux;
            aux = unit8Array[i].toString(16).toUpperCase();
            if (aux.length == 1) {
                aux = '0' + aux;
            }
            hex += aux;
            aux = '';
        }
        return hex;
    }

    static hexToUint8(hex: string): Uint8Array {
        const length = (hex.length / 2) | 0;
        const uint8 = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            uint8[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return uint8;
    }

    static decToHex(dec: any, bytes: any = null) {
        dec = dec.toString().split('');
        let sum = [];
        let hex = '';
        let hexArray = [];
        let i;
        let s;
        while(dec.length) {
            s = 1 * dec.shift();
            for(i = 0; s || i < sum.length; i++)
            {
                s += (sum[i] || 0) * 10;
                sum[i] = s % 16;
                s = (s - sum[i]) / 16;
            }
        }
        while(sum.length) {
            hexArray.push(sum.pop().toString(16));
        }
        hex = hexArray.join('');
        if(hex.length % 2 != 0){
            hex = "0" + hex;
        }
        if(bytes > hex.length / 2) {
            var diff = bytes - hex.length / 2;
            for(var j = 0; j < diff; j++) {
                hex = "00" + hex;
            }
        }
        return hex;
    }

    static uint832ToUuint864(array: Uint8Array): Uint8Array {
        let newUuint864 = new Uint8Array(64);
        for (let i=0; i<32; i++) {
            newUuint864[i] = array[i];
        }
        for (let i=32; i<64; i++) {
            newUuint864[i] = array[i - 32];
        }
        return newUuint864;
    }

}
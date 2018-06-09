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

    static uint4ToUint8(uint4: any) {
        var length = uint4.length / 2;
        var uint8 = new Uint8Array(length);
        for (let i = 0; i < length; i++)	uint8[i] = uint4[i*2] * 16 + uint4[i*2+1];
        return uint8;
    }

    static hexToUint4(hex: any) {
        var length = hex.length;
        var uint4 = new Uint8Array(length);
        for (let i = 0; i < length; i++) uint4[i] = parseInt(hex.substr(i, 1), 16);
        return uint4;
    }

    static uint5ToString(uint5: any) {
        var letter_list = '13456789abcdefghijkmnopqrstuwxyz'.split('');
        var string = "";
        for (let i = 0; i < uint5.length; i++)	string += letter_list[uint5[i]];
        return string;
    }

    static uint4ToUint5(uint4: any) {
        var length = uint4.length / 5 * 4;
        var uint5 = new Uint8Array(length);
        for (let i = 1; i <= length; i++) {
            let n = i - 1;
            let m = i % 4;
            let z = n + ((i - m)/4);
            let right = uint4[z] << m;
            let left;
            if (((length - i) % 4) == 0)	left = uint4[z-1] << 4;
            else	left = uint4[z+1] >> (4 - m);
            uint5[n] = (left + right) % 32;
        }
        return uint5;
    }

    static uint8ToUint4(uint8: any) {
        var length = uint8.length;
        var uint4 = new Uint8Array(length*2);
        for (let i = 0; i < length; i++) {
            uint4[i*2] = uint8[i] / 16 | 0;
            uint4[i*2+1] = uint8[i] % 16;
        }
        return uint4;
    }
}
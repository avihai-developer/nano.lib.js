var cryptoBrowserify = require('crypto-browserify');
getNewSeed = function () {
	var seed = "";
	while (seed.length < 64) {
		var uint8Array = cryptoBrowserify.randomBytes(1);
		var char = uint8Array[0].toString(16).toUpperCase();
		if (char.length > 1) {
			seed = seed + char;
		}
	}
	return seed;
};
setInterval(() => {
	console.log('getNewSeed()', getNewSeed());
}, 300);

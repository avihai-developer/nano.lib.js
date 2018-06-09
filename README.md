
# nano.protocol.lib.js
Unofficial JavaScript library for nano  
  
# Terms  

 - ( Private ) **Seed** - With the seed we create our private keys.
 - ( Private ) **Private Key** - With the private key we can create our public key.
 - ( Public ) **Public Key** - The Public Key is non encoded Account (Nano address). 
 - ( Public ) **Account (Nano address)** - The Account (Nano address) is encoded public key that we use to receive transactions.
 
 # How to install:
 	NPM:
 	npm i nano.protocol.lib.js --save
 	
 	Manual:
 	Just load the files:
 	For development: /dist/nano-lib.js
	For production: /dist/nano-lib.min.js
 	
 # Let's start
 	// Just do it for now i will fix this latter xD
 	NanoLib = NanoLib.NanoLib;
 # Generate new seed
	var newSeed = NanoLib.generateNewSeed(); 
	
	Response:
	BAEAF110C9F7FB41149DE23F92797EFFB39A8CCCDB8183A1A72F489687820BA4
 # Get private key from seed
 	var seed = "BAEAF110C9F7FB41149DE23F92797EFFB39A8CCCDB8183A1A72F489687820BA4";
 	var index = 0;
	var privateKey = NanoLib.getPrivateKey(seed, index);
	
	Response:
	FE15C9B87319CEC8AA27C9B9850380B707D3E3DB8A48FE1BED54CCC868EF186B
 # Get public key from private key
 	var privateKey = "FE15C9B87319CEC8AA27C9B9850380B707D3E3DB8A48FE1BED54CCC868EF186B";
	var publicKey = NanoLib.getPublicKey(privateKey); 
	
	Response:
	3A9514E081FFAB73B7727FC00CE5DE96AFEF3E253836552A7F8CD5EFF7BD838B
 # Get Account (Nano address) from public key
 	var publicKey = "3A9514E081FFAB73B7727FC00CE5DE96AFEF3E253836552A7F8CD5EFF7BD838B";
	var account = NanoLib.getAccount(publicKey);
	
	Response:
	xrb_1gy7s4tzsg96bncc9j3css8mon7smrs3b35pgcoedm8gnes4t8gibh5m8ips
 # You can also create all this in one function:
 	var user = NanoLib.generateNewUser();
 	
 	Response:
	{
		seed: "BAEAF110C9F7FB41149DE23F92797EFFB39A8CCCDB8183A1A72F489687820BA4",
		privateKey: "FE15C9B87319CEC8AA27C9B9850380B707D3E3DB8A48FE1BED54CCC868EF186B",
		publicKey: "3A9514E081FFAB73B7727FC00CE5DE96AFEF3E253836552A7F8CD5EFF7BD838B",
		account: "nano_1gno4mia5zxdgguq6zy13mkxx7ohxwz4cg3pcno9z58oxzuuu1wdunigig95"
	}

# nano.lib.js  
Unofficial JavaScript library for nano  
  
# Terms  

 - ( Private ) **Seed** - With the seed we create our private keys.
 - ( Private ) **Private Key** - With the private key we can create our public key.
 - ( Public ) **Public Key** - The Public Key is non encoded Account (Nano address). 
 - ( Public ) **Account (Nano address)** - The Account (Nano address) is encoded public key that we use to receive transactions.
 
 # Generate new seed
	var newSeed = NanoLib.generateNewSeed(); 
	
	Response:
	4E292D9AF213F8C741CADBB26C1DE4625CA5A53BC94B4F681B712C3E1F7BB36D
 # Get private key from seed
 	var seed = "4E292D9AF213F8C741CADBB26C1DE4625CA5A53BC94B4F681B712C3E1F7BB36D";
 	var index = 0;
	var privateKey = NanoLib.getPrivateKey(seed, index);
	
	Response:
	B7C7ACFEF56B2195606AD160769472FD3BDA2A16462DE2F6AF0AA70AC0419DE4
 # Get public key from private key
 	var privateKey = "B7C7ACFEF56B2195606AD160769472FD3BDA2A16462DE2F6AF0AA70AC0419DE4";
	var publicKey = NanoLib.getPublicKey(privateKey); 
	
	Response:
	7DD3C47166E1BE758CA4D9C445F7007CF8CAC9122F6B48326919506FE0270AAB
 # Get Account (Nano address) from public key
 	var publicKey = "7DD3C47166E1BE758CA4D9C445F7007CF8CAC9122F6B48326919506FE0270AAB";
	var account = NanoLib.getAccount(publicKey);
	
	Response:
	xrb_1gy7s4tzsg96bncc9j3css8mon7smrs3b35pgcoedm8gnes4t8gibh5m8ips
 # You can also create all this in one function:
 	var user = NanoLib.generateNewUser();
 	
 	Response:
	{
		seed: "4E292D9AF213F8C741CADBB26C1DE4625CA5A53BC94B4F681B712C3E1F7BB36D",
		privateKey: "B7C7ACFEF56B2195606AD160769472FD3BDA2A16462DE2F6AF0AA70AC0419DE4",
		publicKey: "7DD3C47166E1BE758CA4D9C445F7007CF8CAC9122F6B48326919506FE0270AAB",
		account: "nano_1gy7s4tzsg96bncc9j3css8mon7smrs3b35pgcoedm8gnes4t8gibh5m8ips"
	}